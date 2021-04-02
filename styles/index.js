import { styles, fonts, colors } from "./theme";
import { extendTheme } from "@chakra-ui/react"

const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
};

const overrides = {
	config,
	styles,
	fonts,
	colors,
};

export const theme = extendTheme(overrides);
