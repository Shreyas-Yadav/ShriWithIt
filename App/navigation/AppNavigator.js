import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screen/ListingScreen";
import MessageScreen from "../screen/MessageScreen";
import AccountScreen from "../screen/AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        tabBarStyle: { height: 60, paddingTop: 8 },
      }}
    >
      <Tab.Screen
        name="ListingScreen"
        component={ListingScreen}
        options={{
          title: "Listings",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="format-list-numbered"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: "Messages",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="email" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: "Account",
          headerStyle: { backgroundColor: colors.secondary },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
