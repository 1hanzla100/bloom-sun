import React from "react";
import {
	Badge,
	Box,
	Center,
	Heading,
	Image,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import moment from "moment";

const ForecastCard = ({ data }) => {
	const CardBackground = useColorModeValue("gray.50", "gray.700");
	return (
		<Box bg={CardBackground} shadow="md" rounded={"lg"} p={6} w="100%">
			<Center>
				<VStack>
					<Image
						width={100}
						src={
							require(`../assets/weather_icons_svgs/${data.weather[0].icon}.svg`)
								.default
						}
						alt={data.weather[0].icon}
					/>
					<Heading fontSize="lg">
						{Math.floor(data.temp.day)} °C
					</Heading>
					<Badge px={2} py={1} fontSize=".8em">
						{moment(data.dt).format("ddd, Do")}
					</Badge>
				</VStack>
			</Center>
		</Box>
	);
};

export default ForecastCard;
