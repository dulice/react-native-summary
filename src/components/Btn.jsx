import {
    View,
    Text,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Pressable,
    Alert,
    ToastAndroid,
  } from "react-native";
  import React from "react";
  import { styles } from "../styles";
import { COLOR, SIZE } from "../styles/constant";
  
  const Btn = () => {
  
    handleSubmit = () => {
        Alert.alert("Submit")
    }

    return (
      <View style={styles.center}>
        <Button
          title="Button"
          onPress={handleSubmit}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          delayLongPress={1000}
          activeOpacity={0.9}
          style={[styles.button, {marginTop: SIZE.xs}]}
        >
          <Text>Touchable Opacity</Text>
        </TouchableOpacity>
  
        <TouchableWithoutFeedback  style={styles.button} onPress={handleSubmit}>
          <Text>Touchable Without Feedback</Text>
        </TouchableWithoutFeedback>
        <Pressable
          android_ripple="#e22"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={({ pressed }) => [
            { backgroundColor: pressed ? COLOR.warning : COLOR.primary, padding: SIZE.xs }
          ]}
        >
          <Text>Pressable</Text>
        </Pressable>
      </View>
    );
  };
  
  export default Btn;
  