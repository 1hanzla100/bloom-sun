import axios from "axios";
import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { coordinatesContext } from "./context/coordinates";
import { currentContext } from "./context/current";
import { forecastContext } from "./context/forecast";
import Forecast from "./sections/Forecast";
import Weather from "./sections/Weather";

function App() {
	const [coordinates] = useContext(coordinatesContext);
	const [, setCurrent] = useContext(currentContext);
	const [, setForecast] = useContext(forecastContext);
	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
			)
			.then(({ data }) => {
				setCurrent(data);
			})
			.catch((e) => console.log("N/A"));
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&exclude=hourly,minutely,alerts,current`
			)
			.then(({ data }) => {
				setForecast(data.daily);
				console.log(data);
			})
			.catch((e) => console.log("N/A"));
		// eslint-disable-next-line
	}, [coordinates]);
	return (
		<>
			<Navbar />
			<Weather />
			<Forecast />
		</>
	);
}

export default App;
