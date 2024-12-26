import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function Card({ imageUrl, title, subtitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.textTitle}>{title}</AppText>
          <AppText style={styles.textSubtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    borderRadius: 15,
    resizeMode: "cover",
    width: "100%",
    height: "200",
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  textSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});
