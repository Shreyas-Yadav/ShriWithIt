import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function PickerListItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
