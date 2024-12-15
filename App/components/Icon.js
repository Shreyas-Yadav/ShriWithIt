import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Icon({
  name,
  size = 35,
  iconColor = "white",
  backgroundColor = "black",
}) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: size,
        height: size,
        borderRadius: size * 0.5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}
