import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const WeatherInfoCard = (props) => {
	const CardBackground = useColorModeValue("gray.50", "gray.700");
	return (
		<Box
			bg={CardBackground}
			shadow="md"
			rounded={"lg"}
			p={6}
			w="100%"
			{...props}
		>
			{props.children}
		</Box>
	);
};
export default WeatherInfoCard;
