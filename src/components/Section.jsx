import React from "react";
import { SectionList, Text, View } from "react-native";
import { styles } from "../styles";
import { SIZE } from "../styles/constant";

const data = [
  {
    title: "Section 1",
    data: ["Item 1", "Item 2", "Item 3"],
  },
  {
    title: "Section 2",
    data: ["Item 4", "Item 5", "Item 6"],
  },
  {
    title: "Section 3",
    data: ["Item 7", "Item 8", "Item 9"],
  },
];

const List = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
        keyExtractor={(item, index) => `title-${index}`}
      />
    </View>
  );
};

export default List;
