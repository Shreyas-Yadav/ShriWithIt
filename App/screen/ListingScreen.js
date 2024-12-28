import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listingsApi";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";
import listingsApi from "../api/listingsApi";

export default function ListingScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.loadListings();
  }, []);

  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {!getListingsApi.loading && getListingsApi.error && (
          <View>
            <AppText style={{ textAlign: "center" }}>
              {getListingsApi.error}
            </AppText>
            <AppButton title="Retry" onPress={getListingsApi.loadListings} />
          </View>
        )}
      </View>
      <View>
        <AppActivityIndicator visible={getListingsApi.loading} />
      </View>
      <Screen style={styles.screen}>
        <FlatList
          data={getListingsApi.listings}
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
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.grey,
  },
});
