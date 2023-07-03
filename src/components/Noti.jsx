import { View, Text } from "react-native";
import React from "react";
import CustomBtn from "./CustomBtn";
import * as Notifications from "expo-notifications";
import { styles } from "../styles";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Noti = () => {
  const handleSendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "New Notificaitons",
        body: "Your app is awesome",
      },
      trigger: null,
    });
  };
  return (
    <View style={styles.card}>
      <Text style={styles.header}>Notifications</Text>
      <CustomBtn title="Send Notification" onPress={handleSendNotification} />
    </View>
  );
};

export default Noti;
