import React, { useRef } from "react";
import LottieView from "lottie-react-native";

import { StyleSheet, View } from "react-native";

function AppActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../assets/animations/jep6TuUm0g.json")}
      autoPlay
      loop
      style={styles.animation}
    />
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 250, // Adjust size as needed
    height: 250, // Adjust size as needed
    alignSelf: "center",
  },
});

export default AppActivityIndicator;
