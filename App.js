import React from "react";

import AuthNavigator from "./App/navigation/AuthNavigator";

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./App/navigation/navigationTheme";
import AppNavigator from "./App/navigation/AppNavigator";
import FeedNavigator from "./App/navigation/FeedNavigator";
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
