import React, { createContext, useState } from "react";

export const currentContext = createContext([]);

export const CurrentProvider = ({ children }) => {
	const [current, setCurrent] = useState(null);

	return (
		<currentContext.Provider value={[current, setCurrent]}>
			{children}
		</currentContext.Provider>
	);
};
