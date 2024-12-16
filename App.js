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
export default function App() {
  return (
    <Screen>
      <AppPicker placeholder="First Name" />
      <AppInputText placeholder="email" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    padding: 20,
    paddingTop: 50,
    justifyContent: "space-around",
  },
});
