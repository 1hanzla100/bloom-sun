import React, { createContext, useState } from "react";

export const forecastContext = createContext([]);

export const ForecastProvider = ({ children }) => {
	const [forecast, setForecast] = useState(null);

	return (
		<forecastContext.Provider value={[forecast, setForecast]}>
			{children}
		</forecastContext.Provider>
	);
};
