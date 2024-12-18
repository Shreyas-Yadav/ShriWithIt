import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { v4 as uuidv4 } from "uuid";

import colors from "./App/config/colors";
import Icon from "./App/components/Icon";
import Screen from "./App/components/Screen";
import EditImage from "./App/components/EditImage";
import { FlatList } from "react-native-gesture-handler";
import ImageUpload from "./App/components/ImageUpload";

export default function App() {
  const [imageList, setImageList] = useState([]);

  const getImageAccess = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        const imageObject = {
          imgId: result.assets[0].uri,
          uri: result.assets[0].uri,
        };

        setImageList([...imageList, imageObject]);
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteAlert = (id) => {
    Alert.alert("Do You want to delete Image ?", "", [
      {
        text: "Close",
        onPress: () => console.log("close"),
      },
      {
        text: "Yes",
        onPress: () =>
          setImageList((previousList) =>
            previousList.filter((item) => item.imgId !== id)
          ),
      },
    ]);
  };

  return <ImageUpload />;
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
  },
  imageSelector: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: colors.medium,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  itemList: {
    flex: 1,
  },
});
