import { View, Text, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { CustomBtn } from '../components';
import { COLOR } from '../styles/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/action';

const Home = () => {
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();
    const [updateName, setUpdateName] = useState("");

    const handleUpdate = async() => {
        const updateUser = {
            name: updateName
        }
        await AsyncStorage.mergeItem("User", JSON.stringify(updateUser));
        dispatch(setUser({...user, name: updateName}))
        setUpdateName("")
        Alert.alert("Update", "Update user into successfuly");
    }
  return (
    <View>
      <Text style={styles.header}>Welocome {user?.name}</Text>
      <Text>{user?.email}</Text>
      <View style={styles.card}>
        <Text style={styles.header}>Update User Info</Text>
        <TextInput style={styles.input} placeholder='Username' value={updateName} onChangeText={text => setUpdateName(text)} />
        <CustomBtn title="Update" color={COLOR.success} onPress={handleUpdate} />
      </View>
    </View>
  )
}

export default Home