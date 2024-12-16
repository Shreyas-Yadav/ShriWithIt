import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function AppButton({ title, onPress, color = "tomato", style }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.textContent, style]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "tomato",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  textContent: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  },
});
