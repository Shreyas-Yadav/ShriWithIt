import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import Constants from "expo-constants";

import { useNetInfo } from "@react-native-community/netinfo";

export default function () {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  else return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 70,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { textAlign: "center", fontSize: 20 },
});
