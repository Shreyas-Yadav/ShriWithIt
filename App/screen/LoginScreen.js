import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";

import * as Yup from "yup";

import Screen from "../components/Screen";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";

const LoginScreen = () => {
  const validationObject = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationObject}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
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
            <AppButton
              style={styles.button}
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 9,
    justifyContent: "center",
  },
  button: {
    marginVertical: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});
