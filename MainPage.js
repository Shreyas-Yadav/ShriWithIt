import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  View,
  Text,
} from "react-native";
import backgroundImage from "./assets/background.jpg";
import myLogo from "./assets/logo-red.png";
export default function MainPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={backgroundImage}
        style={{ height: "100%", width: "100%" }}
      />
      <Text
        style={{ position: "absolute", top: "20%", left: "35%", marginTop: 10 }}
      >
        Sell what you don't
      </Text>
      <Image source={myLogo} style={logoSyles.container} />
      <View style={{ height: 50, width: "100%", backgroundColor: "tomato" }} />
      <View
        style={{ height: 50, width: "100%", backgroundColor: "lightgreen" }}
      />
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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-around",
    justifyContent: "flex-end",
    height: "100%",
    backgroundColor: "transparent",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
