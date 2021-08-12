import React from "react";
import { FaCloud, FaThermometerHalf, FaTint, FaWind } from "react-icons/fa";
import {
	Center,
	Container,
	Flex,
	GridItem,
	Heading,
	Icon,
	Image,
	SimpleGrid,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";
import { useContext } from "react";
import { currentContext } from "../context/current";
import WeatherInfoCard from "../components/WeatherInfoCard";
import PickLocation from "../components/PickLocation";

const Weather = () => {
	const [current] = useContext(currentContext);

	return (
		<Container my={4} maxW="container.lg">
			<SimpleGrid
				alignItems="center"
				columns={{ base: 1, sm: 2 }}
				mx="auto"
			>
				<GridItem colSpan={{ base: "auto", lg: 1 }}>
					<Heading
						fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
						color={useColorModeValue("teal.500", "teal.200")}
					>
						{current ? <>{current.weather[0].main}</> : "- - -"}
					</Heading>
					<Heading fontSize="lg" mt={2} mb={1}>
						{current ? (
							<>
								{current.name},{`${current.sys.country}`}
							</>
						) : (
							"- - -"
						)}
					</Heading>
					<Flex
						color={useColorModeValue("gray.700", "gray.400")}
						alignItems="center"
					>
						<Text>
							{new moment().format("MMMM Do YYYY, h:mm a")}
						</Text>
					</Flex>
					<PickLocation />
				</GridItem>
				<GridItem colSpan={{ base: "auto", lg: 1 }}>
					<Flex justifyContent={{ base: "center", sm: "flex-end" }}>
						{current ? (
							<Image
								width={{
									base: 150,
								}}
								src={
									require(`../assets/weather_icons_svgs/${current.weather[0].icon}.svg`)
										.default
								}
								alt={current.weather[0].icon}
							/>
						) : (
							<Image
								width={{
									base: 150,
								}}
								src={
									require(`../assets/weather_icons_svgs/other/not-available.svg`)
										.default
								}
								alt="N/A"
							/>
						)}
					</Flex>
				</GridItem>
			</SimpleGrid>
			<SimpleGrid
				alignItems="center"
				columns={{ base: 1, md: 2 }}
				gap={2}
				mx="auto"
				mt={2}
			>
				<GridItem colSpan={{ base: "auto", lg: 1 }}>
					<WeatherInfoCard>
						<Heading fontSize="lg">
							<Flex
								alignItems="center"
								justifyContent="space-between"
							>
								<Center>
									<Icon as={FaThermometerHalf} mr={2} />
									Temperature
								</Center>
								{current
									? `${Math.floor(current.main.temp)} °C`
									: "- - -"}
							</Flex>
						</Heading>
					</WeatherInfoCard>
				</GridItem>
				<GridItem colSpan={{ base: "auto", lg: 1 }}>
					<WeatherInfoCard>
						<Heading fontSize="lg">
							<Flex
								alignItems="center"
								justifyContent="space-between"
							>
								<Center>
									<Icon as={FaWind} mr={2} />
									Wind Speed
								</Center>
								{current
									? `${Math.floor(current.wind.speed)} m/s`
									: "- - -"}
							</Flex>
						</Heading>
					</WeatherInfoCard>
				</GridItem>
				<GridItem colSpan={{ base: "auto", lg: 1 }}>
					<WeatherInfoCard>
						<Heading fontSize="lg">
							<Flex
								alignItems="center"
								justifyContent="space-between"
							>
								<Center>
									<Icon as={FaCloud} mr={2} />
									Clouds
								</Center>
								{current ? `${current.clouds.all} %` : "- - -"}
							</Flex>
						</Heading>
					</WeatherInfoCard>
				</GridItem>
				<GridItem colSpan={{ base: "auto", lg: 1 }}>
					<WeatherInfoCard>
						<Heading fontSize="lg">
							<Flex
								alignItems="center"
								justifyContent="space-between"
							>
								<Center>
									<Icon as={FaTint} mr={2} />
									Humidity
								</Center>
								{current
									? `${current.main.humidity} %`
									: "- - -"}
							</Flex>
						</Heading>
					</WeatherInfoCard>
				</GridItem>
			</SimpleGrid>
		</Container>
	);
};

export default Weather;
