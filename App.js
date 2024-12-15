import { View, StyleSheet, Text, Image } from "react-native";
import colors from "./App/config/colors";
import MessageScreen from "./App/screen/MessageScreen";
import MainPage from "./App/screen/MainPage";
import ViewImage from "./App/screen/ViewImage";
export default function App() {
  return <MessageScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    padding: 20,
    paddingTop: 50,
    justifyContent: "space-around",
  },
});
