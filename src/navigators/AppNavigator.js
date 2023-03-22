import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { useStateValue } from "../../StateProvider";
import { ThemeMode } from "../config/consts";
import AuthenticationNavigator from "./AuthenticationNavigator";
import TabNavigator from "./TabNavigator";
import CachedValues from "../config/CachedValues";
import DispatchTypeValues from "../config/DispatchTypeValues";
import ScreenValues from "../config/ScreenValues";
import { LoadCache } from "../cache/Cache";

const Stack = createStackNavigator();

function AppNavigator(props) {
  const { state, dispatch } = useStateValue();

  useEffect(() => {
    loadStarted();
    loadTheme();
  }, [state.appStarted, state.theme]);

  const loadStarted = async () => {
    await LoadCache(CachedValues.started).then((res) => {
      if (!res) {
        dispatch({
          type: DispatchTypeValues.setAppStarted,
          appStarted: false,
        });
      } else {
        dispatch({
          type: DispatchTypeValues.setAppStarted,
          appStarted: res,
        });
      }
    });
  };

  const loadTheme = async () => {
    await LoadCache(CachedValues.theme).then((res) => {
      if (res) {
        dispatch({
          type: DispatchTypeValues.setTheme,
          theme: res,
        });
      } else {
        dispatch({
          type: DispatchTypeValues.setTheme,
          theme: ThemeMode.light,
        });
      }
    });
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {/* {user ? ( */}
      <Stack.Screen
        name={ScreenValues.navigators.authentication}
        component={AuthenticationNavigator}
      />
      {/* ) : ( */}
      <Stack.Screen
        name={ScreenValues.navigators.tab}
        component={TabNavigator}
      />
      {/* )} */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
