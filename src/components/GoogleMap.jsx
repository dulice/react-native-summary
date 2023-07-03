import { View, Text } from "react-native";
import React, { useState } from "react";
import MapView, {Marker} from "react-native-maps";

const GoogleMap = ({mapRegion}) => {
  return (
    <View>
      <MapView style={{alignSelf: "stretch", height: "80%"}} region={mapRegion}>
        <Marker coordinate={mapRegion}/>
      </MapView>
    </View>
  );
};

export default GoogleMap;
