import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";
import AppForm from "../components/Form/AppForm";

const LoginScreen = () => {
  const validationObject = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationObject}
      >
        <AppFormField
          icon="email"
          placeholder="Email Address"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          name="email"
        />
        <AppFormField
          icon="lock"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Password"
          keyboardType="password"
          textContentType="password"
          name="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 9,
    justifyContent: "center",
  },

  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
  },
});
