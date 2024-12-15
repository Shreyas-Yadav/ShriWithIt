import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";
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
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.mainContainer}>
      {/* Profile Section */}
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamadani"
          subTitle="programmingwithmosh@gmail.com"
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
            />
          )}
        />
      </View>

      <ListItem
        title="Logout"
        IconComponent={
          <Icon name="logout" size={45} backgroundColor={colors.medium} />
        }
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
