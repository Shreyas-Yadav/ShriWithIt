import { View, StyleSheet, Text, Image } from "react-native";
import colors from "./App/config/colors";
import MessageScreen from "./App/screen/MessageScreen";
import MainPage from "./App/screen/MainPage";
import ViewImage from "./App/screen/ViewImage";
import Icon from "./App/components/Icon";
import Screen from "./App/components/Screen";
import ListItem from "./App/components/ListItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountScreen from "./App/screen/AccountScreen";
import ListingScreen from "./App/screen/ListingScreen";
import AppInputText from "./App/components/AppInputText";
import AppPicker from "./App/components/AppPicker";
import { useState } from "react";
import LoginScreen from "./App/screen/LoginScreen";

const catagories = [
  { name: "Clothing", value: 1 },
  { name: "Electronics", value: 2 },
  { name: "Furniture", value: 3 },
];
export default function App() {
  const [catagory, setCatagory] = useState(catagories[0].name);

  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    padding: 20,
    paddingTop: 50,
    justifyContent: "space-around",
  },
});
