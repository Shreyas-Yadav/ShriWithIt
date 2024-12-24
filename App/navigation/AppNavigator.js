import { StyleSheet } from "react-native";
import React from "react";
import MessageScreen from "../screen/MessageScreen";
import AccountScreen from "../screen/AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screen/ListingEditScreen";
import NewListingButton from "./NewListingButton";

import routes from "./routes";

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
        name="Account"
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
