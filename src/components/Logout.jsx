import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles'
import CustomBtn from './CustomBtn'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/action'

const Logout = () => {
    const naviagtion = useNavigation();
    const dispatch = useDispatch();
    // useEffect(() => {
        const logout = async () => {
            await AsyncStorage.removeItem("User");
            dispatch(deleteUser());
            naviagtion.navigate('LoginStorage');
        }
    // },[])
  return (
    <View style={styles.center}>
        <CustomBtn title="Logout" onPress={logout}/>
    </View>
  )
}

export default Logout