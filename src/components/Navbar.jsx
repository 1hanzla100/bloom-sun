import React from "react";
import {
	Box,
	Flex,
	HStack,
	IconButton,
	useColorModeValue,
	useColorMode,
	Container,
	Heading,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Headroom from "react-headroom";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Headroom>
			<Box px={4} bg={useColorModeValue("gray.50", "gray.700")}>
				<Container maxW={"6xl"}>
					<Flex
						h={16}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<HStack alignItems={"center"}>
							<Box>
								<a href="/">
									<img
										src={
											require("../assets/img/icon.svg")
												.default
										}
										width={50}
										alt=""
									/>
								</a>
							</Box>
							<Heading
								fontSize="xl"
								color={useColorModeValue(
									"teal.500",
									"teal.200"
								)}
							>
								Bloom Sun
							</Heading>
						</HStack>
						<Flex alignItems={"center"}>
							<IconButton
								aria-label="dark-mode-toggle"
								colorScheme="gray"
								onClick={toggleColorMode}
								variant="ghost"
								icon={
									colorMode === "light" ? (
										<MoonIcon />
									) : (
										<SunIcon />
									)
								}
							/>
						</Flex>
					</Flex>
				</Container>
			</Box>
		</Headroom>
	);
}
