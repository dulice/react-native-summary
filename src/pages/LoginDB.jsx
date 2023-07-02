import { View, Text, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { CustomBtn } from "../components";
import { useNavigation } from "@react-navigation/native";
import { initDatabase, getUserById, insertUser } from '../services/database.js';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/action';

const LoginDB = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    initDatabase()
      .then(() => {
        console.log('Database initialized');
      })
      .catch(error => {
        console.error('Error initializing database:', error);
      });

    getUserById(1)
      .then((user) => {
        dispatch(setUser(user));
        if(user) return navigation.navigate('HomeDrawer', {screen: "Home"})
      })
      .catch((err) => {
        console.log("error while retriving user", err);
      });
  }, []);

  const handleLogin = () => {
    if (name === "" || email === "") {
      return Alert.alert("Warning", "Please fill all the fields");
    } else {
      insertUser(name, email).then((insertId) => {
        console.log(insertId)
      }).catch((err) => {
        console.log("error while create user", err);
      })
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
