import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import bgImage from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import AppButton from "../components/AppButton";
export default function MainPage() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundImage}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>This is My first App</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="Login"
          onPress={() => {
            console.log("login cliked");
          }}
        />
        <AppButton
          title="Register"
          onPress={() => console.log("register tapped")}
          color="lightgreen"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnContainer: {
    width: "100%",
    padding: 30,
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
    fontSize: 20,
    fontWeight: 600,
    paddingVertical: 10,
  },
  registerIcon: {
    backgroundColor: "lightgreen",
    width: "100%",
    height: 70,
  },
});
