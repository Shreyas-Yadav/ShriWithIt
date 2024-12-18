import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function EditImage({ imageUri }) {
  return <Image style={styles.image} source={{ uri: imageUri }} />;
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginHorizontal: 5,
  },
});
