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
export default function App() {
  return <AccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    padding: 20,
    paddingTop: 50,
    justifyContent: "space-around",
  },
});
