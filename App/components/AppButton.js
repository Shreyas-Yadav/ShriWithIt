import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function AppButton({ title, onPress, color = "tomato" }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.textContent}>{title}</Text>
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
    padding: 15,
    margin: 5,
  },
  textContent: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  },
});
