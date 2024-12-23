import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import colors from "../config/colors";

const initalMessages = [
  {
    id: 1,
    title:
      "Laborum non sunt officia elit ullamco. Consectetur elit aliquip voluptate nulla excepteur laboris nostrud sint tempor elit reprehenderit commodo incididunt aliquip. Eu elit aute do in officia commodo aliqua adipisicing reprehenderit. Ipsum nisi aliqua dolor ea do.",
    desc: "Do exercitation deserunt laborum laboris enim minim laboris magna velit aliqua occaecat fugiat.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title:
      "Proident veniam eiusmod anim dolor mollit enim elit do nulla eu laborum sit.",
    desc: "Proident labore minim et nisi nisi est proident nisi minim aliquip enim nisi consectetur.",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefresh] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.container}>
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
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "t2",
              desc: "d2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
  },
});
