import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";

import * as Yup from "yup";

import Screen from "../components/Screen";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";

const LoginScreen = () => {
  const validattionObject = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validattionObject}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppInputText
              icon="email"
              placeholder="Email Address"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleChange("email")}
            />
            <AppText style={{ color: "red" }}>{errors.email}</AppText>
            <AppInputText
              icon="lock"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password"
              keyboardType="password"
              textContentType="password"
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            <AppText style={{ color: "red" }}>{errors.password}</AppText>
            <AppButton title="Login" onPress={handleSubmit} />
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
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});
