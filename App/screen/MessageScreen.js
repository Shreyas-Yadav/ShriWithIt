const messages = [
  {
    id: 1,
    title: "t1",
    desc: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    desc: "d2",
    image: require("../assets/mosh.jpg"),
  },
];

import { FlatList, StyleSheet } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListDeleteAction from "../components/ListDeleteAction";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function MessageScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.desc}
              image={item.image}
              onPress={() => {
                console.log("Message selectd ", item);
              }}
              renderRightActions={() => (
                <ListDeleteAction
                  onPress={() => console.log("deleted", item)}
                />
              )}
            />
          )}
          ItemSeparatorComponent={<ListItemSeperator />}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
