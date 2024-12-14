import { View, StyleSheet, Text, Image } from "react-native";
import Card from "./App/components/Card";
import ListingDetailsScreen from "./App/components/ListingDetailsScreen";
import colors from "./App/config/colors";
import ViewImage from "./App/screen/ViewImage";
import MessageScreen from "./App/screen/MessageScreen";
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
