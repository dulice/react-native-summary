import { View, Text, Button, PermissionsAndroid } from "react-native";
import GeoLocation from "react-native-geolocation-service";
import React, { useState } from "react";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import GoogleMap from "./GoogleMap";
import Noti from "./Noti";
import * as ExpoLocation from 'expo-location';
import CustomBtn from "./CustomBtn";

const Location = () => {
    const [mapRegion, setmapRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

  const getLocation = async () => {
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
    if(status === "granted") {
      const {coords} = await ExpoLocation.getCurrentPositionAsync({});
      setmapRegion({...mapRegion, latitude: coords.latitude, longitude: coords.longitude})
    }
  };
  return (
    <View>
      <Noti />
      <View style={styles.card}>
        <Text style={styles.header}>Location</Text>
        <CustomBtn onPress={getLocation} title="Get Current Location" />
      </View>
      <GoogleMap mapRegion={mapRegion}/>
    </View>
  );
};

export default Location;
