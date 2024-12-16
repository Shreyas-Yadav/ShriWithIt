import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import textStyle from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[textStyle.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
