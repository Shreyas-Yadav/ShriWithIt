const {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} = require("react-native");
import charImage from "./assets/chair.jpg";
export default function ViewImage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={mainViewStyle.container}>
        <View
          style={{ height: 50, width: 50, backgroundColor: "tomato" }}
        ></View>
        <View
          style={{ height: 50, width: 50, backgroundColor: "lightgreen" }}
        ></View>
      </View>
      <Image
        source={charImage}
        style={{
          height: 450,
          width: "100%",
          resizeMode: "cover",
          position: "absolute",
          top: "22%",
        }}
      />
    </SafeAreaView>
  );
}

const mainViewStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
});

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-around",
    height: "100%",
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
