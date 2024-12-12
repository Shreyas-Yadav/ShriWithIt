import { StyleSheet, SafeAreaView } from "react-native";
import MainPage from "./MainPage";
import ViewImage from "./ViewImage";
export default function App() {
  return (
    <SafeAreaView>
      <MainPage />
      {/* <ViewImage /> */}
    </SafeAreaView>
  );
}

const logoSyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "10%",
    left: "41%",
    resizeMode: "contain",
    height: 75,
    width: 75,
  },
});
