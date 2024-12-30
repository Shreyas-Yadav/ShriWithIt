import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";
import AppForm from "../components/Form/AppForm";
import auth from "../api/auth";
import ErrorMessage from "../components/Form/ErrorMessage";

import useAuth from "../auth/useAuth";

const LoginScreen = () => {
  const Auth = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);

  const validationObject = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  const handleSubmit = async ({ email, password }) => {
    const response = await auth.login(email, password);
    if (!response.ok) return setLoginFailed(true);
    setLoginFailed(false);
    Auth.logIn(response.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/appstore.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationObject}
      >
        <ErrorMessage
          message="Invalid Email or/and Password"
          visible={loginFailed}
        />
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
