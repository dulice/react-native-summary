import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";

const FetchData = () => {
  const [books, setBooks] = useState([]);
  const url = "https://mocki.io/v1/e9dc9895-8c1a-4609-878d-34fd8539d300";
  useEffect(() => {
    const fetchBook = async () => {
        const res = await fetch(url, {method: "GET"});
        const result = await res.json();
        setBooks(result)
    }
    fetchBook()
  },[]);

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.header}>{item.title}</Text>
            <Text style={{fontFamily: "Dancing"}}>Author - {item.author}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => `book-${index}`}
      />
    </View>
  );
};

export default FetchData;
