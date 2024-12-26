import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import PickerListItem from "./PickerListItem";
import ListItemSeperator from "./ListItemSeperator";
import AppButton from "./AppButton";

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  numberOfColumns = 1,
  selectedItem,
  PickerItemComponent = PickerListItem,
  placeholder,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={35}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isModalVisible}>
        <Screen>
          <View style={styles.btnContainer}>
            <AppButton title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            ItemSeparatorComponent={<ListItemSeperator />}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setIsModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  btnContainer: {
    width: "50%",
    alignSelf: "center",
  },
});
