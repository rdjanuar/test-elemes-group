import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { fonts, colors } from "./foundations";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  fonts,
  colors,
  config,
};

export default extendTheme(overrides);
