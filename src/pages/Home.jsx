import { View, Text, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles";
import { CustomBtn, TakeCamera } from "../components";
import { COLOR } from "../styles/constant";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/action";
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";
import { updateUserById } from "../services/database";
const Home = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [updateName, setUpdateName] = useState("");

  const handleUpdate = async () => {
    const updateUser = {
      name: updateName,
    };
    // await AsyncStorage.mergeItem("User", JSON.stringify(updateUser));
    // dispatch(setUser({ ...user, name: updateName }));
    try {
      await updateUserById(1, updateName);
      dispatch(setUser({ ...user, name: updateName }));
      setUpdateName("");
      Alert.alert("Update", "Update user into successfuly");
    } catch (err) {
      console.log("error updating user", err);
    }
  };

  return (
    <View>
        <View>
          <Text style={styles.header}>Welocome {user?.name}</Text>
          <Text>{user?.email}</Text>
          <View style={styles.card}>
            <Text style={styles.header}>Update User Info</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={updateName}
              onChangeText={(text) => setUpdateName(text)}
            />
            <CustomBtn title={<Icon name="camera" size={30}/>} onPress={() => navigation.navigate('TakeCamera')} />
            <View style={{height: 10}} />
            <CustomBtn
              title="Update"
              color={COLOR.success}
              onPress={handleUpdate}
            />
          </View>
        </View>
    </View>
  );
};

export default Home;
