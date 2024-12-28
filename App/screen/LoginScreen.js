import { Easing, Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";
import AppForm from "../components/Form/AppForm";
import bgImage from "../assets/background.jpg";
import { ImageBackground } from "react-native";
import apiClient from "../api/client";
import auth from "../api/auth";
import ErrorMessage from "../components/Form/ErrorMessage";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../auth/context";
import storage from "../auth/storage";

const LoginScreen = () => {
  const authContext = useContext(AuthContext);

  const [loginFailed, setLoginFailed] = useState(false);

  const validationObject = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  const handleSubmit = async ({ email, password }) => {
    const response = await auth.login(email, password);
    if (!response.ok) return setLoginFailed(true);
    const user = jwtDecode(response.data);
    setLoginFailed(false);
    authContext.setUser(user);
    storage.storeToken(response.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
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
