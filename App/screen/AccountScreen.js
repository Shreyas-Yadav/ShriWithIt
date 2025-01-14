import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

import useAuth from "../auth/useAuth";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
      size: 50,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
      size: 50,
    },
    targetScreen: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.mainContainer}>
      {/* Profile Section */}
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>

      {/* Menu Items */}
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeperator}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  size={item.icon.size}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <ListItem
        title="Logout"
        IconComponent={
          <Icon name="logout" size={45} backgroundColor={colors.medium} />
        }
        onPress={() => logout()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  mainContainer: {
    backgroundColor: colors.grey,
  },
});
