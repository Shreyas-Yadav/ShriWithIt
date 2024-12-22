import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <GestureHandlerRootView>
        <View style={style}>{children}</View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight + 10,
    flex: 1,
  },
});
