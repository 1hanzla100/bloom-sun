import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Icon,
	Center,
	Flex,
	Heading,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import axios from "axios";
import MyTextInput from "./MyTextInput";
import { FaMapMarkerAlt } from "react-icons/fa";
import WeatherInfoCard from "./WeatherInfoCard";
import { useContext } from "react";
import { coordinatesContext } from "../context/coordinates";

const PickLocation = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [search, setSearch] = useState([]);
	const [, setCoordinates] = useContext(coordinatesContext);

	return (
		<>
			<Button
				onClick={onOpen}
				leftIcon={<Icon as={FaMapMarkerAlt} />}
				variant="ghost"
				my={2}
			>
				Pick Location
			</Button>

			<Modal
				isOpen={isOpen}
				onClose={() => {
					onClose();
					setSearch([]);
				}}
				size="xl"
			>
				<ModalOverlay />
				<ModalContent onTouchCancel={(e) => e.preventDefault()}>
					<ModalHeader>Pick Location</ModalHeader>
					<ModalCloseButton />
					<Formik
						initialValues={{
							location: "",
						}}
						validationSchema={Yup.object({
							location: Yup.string()
								.max(
									100,
									"Must be Atleast 100 Characters or less"
								)
								.required("This Field is Required"),
						})}
						onSubmit={(
							{ location },
							{ setSubmitting, resetForm, setFieldError }
						) => {
							axios
								.get(
									`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
								)
								.then(({ data }) => {
									resetForm();
									setSubmitting(false);
									setSearch(data);
								})
								.catch((e) => {
									setSubmitting(false);
									setFieldError("location", "Error Occured");
								});
						}}
					>
						{(props) => (
							<Form>
								<ModalBody>
									<MyTextInput
										label="Enter Location"
										name="location"
										placeholder="Location"
										maxLength={100}
									/>
									{search.map((data, i) => (
										<WeatherInfoCard
											key={i}
											_hover={{ cursor: "pointer" }}
											onClick={() => {
												setCoordinates({
													lat: data.lat,
													lon: data.lon,
												});
												setSearch([]);
												onClose();
											}}
										>
											<Heading fontSize="lg">
												<Flex
													alignItems="center"
													justifyContent="space-between"
												>
													<Center>
														<Icon
															as={FaMapMarkerAlt}
															mr={2}
														/>
														{data.name}
													</Center>
												</Flex>
											</Heading>
										</WeatherInfoCard>
									))}
								</ModalBody>
								<ModalFooter>
									<Button
										isLoading={props.isSubmitting}
										type="submit"
										mr={3}
									>
										Search
									</Button>
									<Button
										colorScheme="gray"
										onClick={() => {
											onClose();
											setSearch([]);
										}}
									>
										Close
									</Button>
								</ModalFooter>
							</Form>
						)}
					</Formik>
				</ModalContent>
			</Modal>
		</>
	);
};

export default PickLocation;
