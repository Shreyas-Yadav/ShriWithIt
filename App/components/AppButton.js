import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function AppButton({
  title,
  onPress,
  color = "tomato",
  style,
  disabled,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.textContent]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    backgroundColor: "tomato",
    borderRadius: 25,
    justifyContent: "center",
    height: 50,
    marginVertical: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textContent: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  },
});
