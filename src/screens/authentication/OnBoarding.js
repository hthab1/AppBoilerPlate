import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeHook } from "../../hooks/useThemeHook";

function OnBoarding() {
  const { setAppTheme, theme, themeMode } = useThemeHook();

  return <View></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default OnBoarding;
