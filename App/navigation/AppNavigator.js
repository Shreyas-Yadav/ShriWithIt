import { PermissionsAndroid, StyleSheet } from "react-native";
import React, { useEffect } from "react";

import * as Notifications from "expo-notifications";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screen/ListingEditScreen";
import NewListingButton from "./NewListingButton";

import Navigation from "./rootNavigation";

import routes from "./routes";
import useNotifications from "../hooks/useNotifications";

const AppNavigator = () => {
  useNotifications();

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        tabBarStyle: { height: 60, paddingTop: 8 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.EDIT_LISTINGS)}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountNavigator}
        options={{
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
