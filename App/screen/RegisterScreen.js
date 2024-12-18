import { StyleSheet, Image } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";

const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label("Username"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="account"
          name="username"
          placeholder="Username"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <AppFormField
          icon="email"
          name="email"
          placeholder="Email Address"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <AppFormField
          icon="lock"
          name="password"
          placeholder="Password"
          keyboardType="password"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 20,
  },
  screen: {
    padding: 10,
    justifyContent: "center",
  },
});
