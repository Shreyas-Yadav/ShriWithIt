import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import ListItemSeperator from "../components/ListItemSeperator";
import colors from "../config/colors";

export default function ListingScreen() {
  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch for sale!",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
  ];

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        ItemSeparatorComponent={ListItemSeperator}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price} // Ensure the prop name matches `Card`
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.grey,
  },
});
