import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../config/colors";

const CatagoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.conatiner}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={70}
      ></Icon>
      <AppText>{item.label}</AppText>
    </View>
  );
};

export default CatagoryPickerItem;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    width: "33.33%",
  },
});
