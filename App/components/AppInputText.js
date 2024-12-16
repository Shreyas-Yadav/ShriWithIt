import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Screen from "./Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import textStyle from "../config/styles";

const AppInputText = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={25} color={colors.medium} />
      )}
      <TextInput style={textStyle.text} placeholder={placeholder} />
    </View>
  );
};

export default AppInputText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
});
