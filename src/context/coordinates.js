import React, { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

export const coordinatesContext = createContext([]);

export const CoordinatesProvider = ({ children }) => {
	const [coordinates, setCoordinates] = useLocalStorageState(
		{
			lat: 31.56192,
			lon: 74.348083,
		},
		"coordinates"
	);

	return (
		<coordinatesContext.Provider value={[coordinates, setCoordinates]}>
			{children}
		</coordinatesContext.Provider>
	);
};
