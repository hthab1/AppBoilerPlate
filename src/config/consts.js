import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ScreenWidth = width;
export const ScreenHeight = height;

export const ContainerWidth = width * 0.9;
export const ContainerPercentWidth = "90%";

export const ThemeMode = {
  light: "light",
  dark: "dark",
};
