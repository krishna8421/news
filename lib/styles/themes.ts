import { extendTheme } from "@chakra-ui/react";
import type { Styles } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

// Set Dark theme for default
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Change the default styles
const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.900")(props),
    },
    semanticTokens: {
      colors: {
        error: "red.500",
        warning: "yellow.500",
        info: "blue.500",
        success: "green.500",
        primary: {
          red: "#E50914",
        },
      },
    },
  }),
};

// Extend the default components style with the new one.
const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: "none",
      },
    },
  },
};

export const theme = extendTheme({
  styles,
  config,
  components,
});
