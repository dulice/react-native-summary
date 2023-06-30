import { View, Text, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import { CustomBtn } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/action';

const LoginStorage = () => {
    const dispatch = useDispatch();
    const naviagtion = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    useEffect(() => {
        const getUser = async () => {
          const storageUser = await AsyncStorage.getItem("User");
          const user = JSON.parse(storageUser);
          if(user) {
            dispatch(setUser(user));
            naviagtion.navigate('HomeDrawer', {screen: 'Home'})
          }
        }
        getUser();
    },[])


    const handleLogin = async() => {
        if(name === "" || email === "") {
            return Alert.alert("Warning", "Please fill all the fields")
        } else {
            const user = {name, email}
            await AsyncStorage.setItem("User", JSON.stringify(user));
            dispatch(setUser(user));
            naviagtion.navigate('HomeDrawer')
        }
    }
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.card}>
                <Text style={styles.header}>Login ( Sync  Storage )</Text>
                <TextInput style={styles.input} placeholder='Username' value={name} onChangeText={text => setName(text)} />
                <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' value={email} onChangeText={text => setEmail(text)} />
                <CustomBtn onPress={handleLogin} title="login" />
            </View>
    </View>
  )
}

export default LoginStorage