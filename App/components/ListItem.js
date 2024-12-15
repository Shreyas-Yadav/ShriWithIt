import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.primary}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent && <IconComponent />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white", // Ensure background is visible when swiping
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  subTitle: {
    color: colors.medium,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
  },
});
