const {
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} = require("react-native");
import chairImage from "../assets/chair.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={styles.closeBtn}>
          <MaterialCommunityIcons name="close" color="grey" size={40} />
        </View>
        <View style={styles.deleteBtn}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="tomato"
            size={40}
          />
        </View>
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
  closeBtn: {},
  container: {
    height: "100%",
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  deleteBtn: {},
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "600",
  },
});
