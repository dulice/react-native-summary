import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import BgImage from "../../assets/bg.jpg";
import VerifyImage from "../../assets/verify.png";
import { styles } from "../styles";

const warningText = "Text Should be more than 3 character";

const Input = () => {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);
  const [verify, setVerify] = useState(false);


  const handleSubmit = () => {
    if (text.length < 3) {
      Alert.alert(
        "Warning",
        warningText,
        [
          {
            text: "Don't show again",
            onPress: () => console.log("Press don't show again"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Press cancel"),
          },
          {
            text: "OK",
            onPress: () => console.log("Press ok"),
          },
        ],
        {
          cancelable: true,
          onDismiss: () => console.log("Alert dismiss"),
        }
      );
    } else {
      setShowText(!showText);
    }
  };
  const handleVerify = () => {
    setVerify(!verify);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.bgImg}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={text}
          onChangeText={(text) => setText(text)}
          keyboardType="name-phone-pad"
          disableFullscreenUI={true}
        />
        <View style={{alignItems: "center"}}>

            <Pressable
            onPress={handleSubmit}
            onLongPress={handleVerify}
            style={styles.button}
            >
                <Text style={{color: "#fff"}}>{showText ? "Cancel" : "Submit"}</Text>
            </Pressable>
        </View>
        <View style={styles.card}>
            {showText && <Text>You register as {text}</Text>}
            {verify && <Image style={styles.image} source={VerifyImage} resizeMode="contain" />}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Input;
