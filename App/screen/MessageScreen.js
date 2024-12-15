import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initalMessages = [
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

export default function MessageScreen() {
  const [messages, setMessages] = useState(initalMessages);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
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
