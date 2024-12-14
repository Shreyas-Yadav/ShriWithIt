import { View, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import ListItem from "./ListItem";
export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/couch.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Couch for sale</AppText>
        <AppText style={styles.price}>$300</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamadani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 250,
  },
  price: {
    color: "lightgreen",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 20,
  },
});
