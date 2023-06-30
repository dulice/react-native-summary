import { View, Text, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { CustomBtn } from "../components";
import { useNavigation } from "@react-navigation/native";
import SQLite from "react-native-sqlite-storage";

// SQLite.enablePromise(true);
  
// var db = SQLite.openDatabase(
//   { name: "MainDB", location: "default" },
//   (success) => {
//     console.log(success);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

const LoginDB = () => {
  const naviagtion = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //   const userData = db.transaction((tx) => {
  //     tx.executeSql(
  //       "SELECT * FROM Users WHERE id=?",
  //       [1],
  //       (tx, results) => {
  //         console.log(results);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   });

  useEffect(() => {
    const createTable = async () => {
      await db.transaction(async (tx) => {
        await tx.executeSql(
          "CREATE TABLE IF NOT EXISTS Users (id INTEGER AUTOINCREMENT PRIMARY KEY, name TEXT, email TEXT)"
        );
      });
    };
    createTable();
    // userData();
  }, []);

  const handleLogin = async () => {
    if (name === "" || email === "") {
      return Alert.alert("Warning", "Please fill all the fields");
    } else {
      // await db.transaction((tx) => {
      //   tx.executeSql("INSERT INTO Users (name, email) VALUES (?,?)", [
      //     name,
      //     email,
      //   ]);
      // });
      naviagtion.navigate("HomeDrawer");
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.card}>
        <Text style={styles.header}>Login ( SQLite )</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <CustomBtn onPress={handleLogin} title="login" />
      </View>
    </View>
  );
};

export default LoginDB;
