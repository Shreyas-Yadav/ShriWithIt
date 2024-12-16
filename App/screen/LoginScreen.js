import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppInputText
        icon="email"
        placeholder="Email Address"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <AppInputText
        icon="lock"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Password"
        keyboardType="password"
        textContentType="password"
        onChangeText={(passText) => setPassword(passText)}
        secureTextEntry
      />

      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 9,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});
