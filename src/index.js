import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import dotenv from "dotenv";

import "@fontsource/lato";

import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import theme from "./theme";
import { CoordinatesProvider } from "./context/coordinates";
import { CurrentProvider } from "./context/current";
import { ForecastProvider } from "./context/forecast";

const App = lazy(() => import("./App"));

dotenv.config();

const Loader = () => (
	<Center height="100vh">
		<Spinner size="xl" color="teal.500" thickness={3} />
	</Center>
);

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<CoordinatesProvider>
				<CurrentProvider>
					<ForecastProvider>
						<Suspense fallback={<Loader />}>
							<App />
						</Suspense>
					</ForecastProvider>
				</CurrentProvider>
			</CoordinatesProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
