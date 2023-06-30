import { View, Text, ScrollView, RefreshControl } from "react-native";
import React, { useState } from "react";
import { usersArray } from "./Flat";
import { styles } from "../styles";

const Map = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [users, setUsers] = useState(usersArray);
  const onRefresh = () => {
    setRefreshing(true);
    setUsers([
      { id: users.length + 1, name: `User ${users.length + 1}` },
      ...users,
    ]);
    setRefreshing(false);
  };

  return (
    <>
      {/* NOTE: use ScrollView to scroll the data with (Map) array */}
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            colors={["#ee343f"]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {users.map((user) => (
          <View style={styles.card} key={user.id}>
            <Text>{user.name}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Map
