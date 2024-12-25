import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listings";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";

export default function ListingScreen({ navigation }) {
  const [error, setError] = useState(false);
  const [errorResponse, setErrorResponse] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingApi.getListings();
    setLoading(false);
    if (!response.ok) {
      console.log(response);

      setErrorResponse(response);
      return setError(true);
    }

    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.animation}>
        <View>
          {!loading && error && (
            <View>
              <AppText style={{ textAlign: "center" }}>
                {errorResponse.problem.toString()}
              </AppText>
              <AppButton title="Retry" onPress={loadListings} />
            </View>
          )}
        </View>
        <View>
          <AppActivityIndicator visible={loading} />
        </View>
      </View>

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
  animation: {
    height: "100%",
    justifyContent: "center",
  },
  screen: {
    padding: 10,
    backgroundColor: colors.grey,
  },
});
