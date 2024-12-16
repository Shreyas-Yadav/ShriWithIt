import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import textStyle from "../config/styles";

const AppInputText = ({ icon, placeholder, onChangeText, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={25} color={colors.medium} />
      )}
      <TextInput
        onChangeText={onChangeText}
        style={textStyle.text}
        {...otherProps}
        placeholder={placeholder}
      />
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
