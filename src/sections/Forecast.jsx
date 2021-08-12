import React, { useContext } from "react";
import {
	Container,
	GridItem,
	SimpleGrid,
} from "@chakra-ui/react";
import { forecastContext } from "../context/forecast";
import ForecastCard from "../components/ForecastCard";

const Forecast = () => {
	const [forecast] = useContext(forecastContext);
	console.log(forecast);
	return (
		<Container my={4} maxW="container.lg">
			<SimpleGrid
				alignItems="center"
				columns={{ base: 2, md: 3, lg: 4 }}
				gap={4}
				mx="auto"
			>
				{forecast
					? forecast.map((data, index) => (
							<GridItem
								key={index}
								colSpan={{ base: "auto", sm: 1 }}
							>
								<ForecastCard data={data} />
							</GridItem>
					  ))
					: null}
			</SimpleGrid>
		</Container>
	);
};

export default Forecast;
