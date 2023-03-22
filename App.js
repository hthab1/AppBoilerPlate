import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import reducer, { initialState } from "./reducer";
import AppNavigator from "./src/navigators/AppNavigator";
import { StateProvider } from "./StateProvider";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast />
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
