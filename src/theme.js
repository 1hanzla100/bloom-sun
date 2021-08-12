import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const colors = {
	white: "#ffffff",
};

const fonts = {
	heading: "Lato",
	body: "Lato",
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const styles = {
	global: (props) => ({
		"::-webkit-scrollbar": {
			width: "8px",
			backgroundColor: "#dcf3ff",
		},
		"::-webkit-scrollbar-thumb": {
			backgroundColor: props.colorMode === "dark" ? "#81E6D9" : "#319795",
			borderRadius: "5px",
		},
		"::-webkit-scrollbar-thumb:hover": {
			backgroundColor: props.colorMode === "dark" ? "#4FD1C5" : "#2C7A7B",
			borderRadius: "5px",
		},
	}),
};

const theme = { colors, fonts, config, styles };

const customTheme = extendTheme(
	theme,
	withDefaultColorScheme({
		colorScheme: "teal",
	})
);

export default customTheme;
