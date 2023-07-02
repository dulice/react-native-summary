import { View, Text, Button, PermissionsAndroid } from "react-native";
import GeoLocation from "react-native-geolocation-service";
import React, { useState } from "react";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import GoogleMap from "./GoogleMap";

const Location = () => {
    const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const requestPermissionLocation = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Can we access your location",
        buttonNeutral: "Ask me later",
        buttonNegative: "Cancel",
        buttonPositive: "Ok",
      }
    );
    if (granted === "granted") {
      console.log("Location Access");
    } else {
      console.log("Deny");
    }
  };
  const getLocation = () => {
    const result = requestPermissionLocation();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };
  return (
    <View>
      <Text>Location</Text>
      <Button style={styles.button} onPress={getLocation} title="Get Current Location" />
      <Button style={styles.button} onPress={() => navigation.navigate('Input')} title="Go To User Register" />
      <Button style={styles.button} onPress={() => navigation.navigate('Map')} title="Go To User Data with Map" />
      <Button style={styles.button} onPress={() => navigation.navigate('Flat')} title="Go To User Data with FlatList" />
      {location && <Text>{location.latitude}</Text>}
      <GoogleMap />
    </View>
  );
};

export default Location;
