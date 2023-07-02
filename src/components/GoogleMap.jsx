import { View, Text } from "react-native";
import React, { useState } from "react";
import MapView, {Marker} from "react-native-maps";

const GoogleMap = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View>
      <Text>GoogleMap</Text>
      <MapView style={{alignSelf: "stretch", height: "80%"}} region={mapRegion}>
        <Marker coordinate={mapRegion}/>
      </MapView>
    </View>
  );
};

export default GoogleMap;
