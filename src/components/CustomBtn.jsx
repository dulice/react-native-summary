import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "../styles";
import { COLOR, SIZE } from "../styles/constant";

const CustomBtn = ({
  title,
  textColor = COLOR.light,
  color = COLOR.primary,
  onPress,
  onLongPress
}) => {
  return (
    <View style={{alignItems: "center"}}> 
        <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={({ pressed }) => [
            {
            backgroundColor: pressed ? COLOR.warning : color,
            padding: SIZE.md,
            alignItems: "center",
            },
        ]}
        >
        <Text
            style={{
            color: textColor,
            textTransform: "uppercase",
            fontFamily: "Nunito",
            fontWeight: "bold",
            }}
        >
            {title}
        </Text>
        </Pressable>
    </View>
  );
};

export default CustomBtn;
