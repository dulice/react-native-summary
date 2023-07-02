import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Camera } from "expo-camera";
import CustomBtn from "./CustomBtn";
import { COLOR, SIZE } from "../styles/constant";
import { Pressable } from "react-native";
import * as MediaLibrary from "expo-media-library";
import Icon from "react-native-vector-icons/Ionicons";

const TakeCamera = () => {
  const [camera, setCamera] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [startCamera, setStartCamera] = useState(false);

  const handleStartCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    const { status: mediaStatus } =
      await MediaLibrary.requestPermissionsAsync();
    if (status === "granted" && mediaStatus === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access Denied");
    }
  };

  const handleCapture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    if (photo) {
      try {
        const asset = await MediaLibrary.createAssetAsync(photo.uri);
        await MediaLibrary.createAlbumAsync("MyApp", asset)
          .then(() => {
            console.log("Photo saved to album");
          })
          .catch((error) => {
            console.log("Error creating album: ", error);
          });
      } catch (err) {
        console.log("Erro saving photo", err);
      }
    }
  };

  const handleSwitchCamera = () => {
    if (cameraType === "back") {
      setCameraType("front");
    } else {
      setCameraType("back");
    }
  };

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      {startCamera ? (
        <View
          style={{
            width: "100%",
            flex: 1
          }}
        >
          <Camera
            ref={(ref) => setCamera(ref)}
            type={cameraType}
            style={{ flex: 1 }}
          >
            <View style={{ flex: 1 }}>
              <Pressable
                onPress={handleCapture}
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#ffffff90" : COLOR.light },
                  styles.button,
                ]}
              />
              <Pressable
                style={styles.switchButton}
                onPress={handleSwitchCamera}
              >
                <Icon name="sync" style={styles.switchButtonIcon} />
              </Pressable>
            </View>
          </Camera>
        </View>
      ) : (
        <View style={{ marginVertical: SIZE.xs }}>
          <CustomBtn title="Take a photo" onPress={handleStartCamera} />
        </View>
      )}
    </View>
  );
};

export default TakeCamera;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 70,
    height: 70,
    bottom: 30,
    left: "40%",
    position: "absolute",
  },
  switchButton: {
    borderRadius: 50,
    width: 70,
    height: 70,
    bottom: 30,
    left: "70%",
    position: "absolute",
    backgroundColor: "#ffffff30",
  },
  switchButtonIcon: {
    position: "relative",
    top: "30%",
    left: "30%",
    color: COLOR.light,
    fontSize: 30,
  },
});
