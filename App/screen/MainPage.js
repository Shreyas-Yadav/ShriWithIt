import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import bgImage from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export default function MainPage() {
  const navigation = useNavigation();
  const handlePress = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <ImageBackground source={bgImage} style={styles.backgroundImage}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>This is My first App</Text>
      </View>
      <View style={styles.btnContainer}>
        <View>
          <AppButton title="Login" onPress={() => handlePress("Login")} />
        </View>
        <View>
          <AppButton
            title="Register"
            onPress={() => handlePress("Register")}
            color="lightgreen"
          />
        </View>
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
    height: 200,
    width: "100%",
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
