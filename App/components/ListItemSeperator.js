import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ListItemSeperator() {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.medium,
    margin: 5,
  },
});
