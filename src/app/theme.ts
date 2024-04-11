import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  colors: {
    primary: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    secondary: {
      50: "#fefcf9",
      100: "#fef9f3",
      200: "#fdf4e8",
      300: "#fae1d2",
      400: "#f6c7a9",
      500: "#f0a775",
      600: "#e79f67",
      700: "#cf8e5d",
      800: "#a07551",
      900: "#744210",
    },
  },
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
});
