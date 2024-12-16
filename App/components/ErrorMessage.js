import { StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

const ErrorMessage = ({ message, visible }) => {
  if (!visible || !message) return null;
  return <AppText style={styles.error}>{message}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
    textAlign: "justify",
  },
});
