import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ScreenValues from "../config/ScreenValues";
import HomePage from "../screens/loggedIn/home/HomePage";

const Stack = createStackNavigator();

function TabNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name={ScreenValues.screens.getStarted}
        component={HomePage}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TabNavigator;
