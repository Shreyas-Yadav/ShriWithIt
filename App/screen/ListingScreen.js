import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listings";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

import routes from "../navigation/routes";

export default function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = await listingApi.getListings();
    console.log(response.data);

    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

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
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.DETAILS_LISTINGS, item)}
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
