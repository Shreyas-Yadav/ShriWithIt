import React from "react";

import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "../screen/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterScreen from "../screen/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../screen/MainPage";

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={styles.headerOptions}
    >
      <Stack.Screen name="Main" component={MainPage} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({
  headerOptions: {
    headerShown: false,
    animation: "fade",
  },
});
