import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native";

const CatagoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={70}
        ></Icon>
        <AppText>{item.label}</AppText>
      </TouchableOpacity>
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
