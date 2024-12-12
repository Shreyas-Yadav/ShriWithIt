const {
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} = require("react-native");
import chairImage from "../assets/chair.jpg";
export default function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={styles.closeBtn}></View>
        <View style={styles.deleteBtn}></View>
      </View>
      <Image source={chairImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "10%",
    paddingLeft: 40,
    paddingRight: 40,
  },
  closeBtn: {
    height: 50,
    width: 50,
    backgroundColor: "lightgreen",
  },
  container: {
    height: "100%",
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  deleteBtn: {
    height: 50,
    width: 50,
    backgroundColor: "tomato",
  },
  image: {
    marginTop: "10%",
    resizeMode: "contain",
    width: "100%",
    height: "600",
  },
});
