import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import textStyle from "../config/styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[textStyle.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
