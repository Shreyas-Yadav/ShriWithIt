import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import bgImage from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
export default function MainPage() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundImage}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>This is My first App</Text>
      </View>
      <View style={styles.loginIcon}></View>
      <View style={styles.registerIcon}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginIcon: {
    backgroundColor: "tomato",
    width: "100%",
    height: 70,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: "70",
    alignItems: "center",
  },
  logoText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
  },
  registerIcon: {
    backgroundColor: "lightgreen",
    width: "100%",
    height: 70,
  },
});
