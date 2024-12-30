import { StyleSheet, Image, registerCallableModule } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";
import auth from "../api/auth";
import ErrorMessage from "../components/Form/ErrorMessage";
import useAuth from "../auth/useAuth";

const RegisterScreen = () => {
  const clientAuth = useAuth();
  const [error, setError] = useState();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label("Username"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  const handleRegister = async ({ email, username, password }) => {
    setError(null);
    const response = await auth.register(email, username, password);
    if (!response.ok) {
      if (response.data) setError(response.data.error);
      else {
        setError("Unexpected error occured");
        console.log(response);
      }
      return;
    }
    try {
      const { data: authToken } = await auth.login(email, password);
      clientAuth.logIn(authToken);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/appstore.png")} />
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <ErrorMessage message={error} visible={error} />
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
