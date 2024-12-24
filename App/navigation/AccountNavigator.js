import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screen/AccountScreen";
import MessageScreen from "../screen/MessageScreen";

const AccountNavigator = ({}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;

const styles = StyleSheet.create({});
