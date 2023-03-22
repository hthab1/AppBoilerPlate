import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ScreenValues from "../config/ScreenValues";
import OnBoarding from "../screens/authentication/OnBoarding";

const Stack = createStackNavigator();

function AuthenticationNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name={ScreenValues.screens.onBoarding}
        component={OnBoarding}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AuthenticationNavigator;
