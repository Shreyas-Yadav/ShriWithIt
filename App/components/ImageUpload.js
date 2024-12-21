import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import React from "react";

import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import EditImage from "../components/EditImage";
import { FlatList } from "react-native-gesture-handler";

export default function ImageUpload() {
  const [imageList, setImageList] = useState([]);

  const getImageAccess = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
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
  return (
    <Screen>
      <View style={styles.container}>
        <TouchableOpacity onPress={getImageAccess}>
          <View style={styles.imageSelector}>
            <Icon name="camera" backgroundColor="none" size={70} />
          </View>
        </TouchableOpacity>

        <FlatList
          style={styles.itemList}
          data={imageList}
          keyExtractor={(item) => item.imgId.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => deleteAlert(item.imgId)}>
              <EditImage imageUri={item.uri} />
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
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
