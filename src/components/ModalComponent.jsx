import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../styles";
import { SIZE } from "../styles/constant";

export const warningText = "Text Should be more than 3 character";

const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.button}
          activeOpacity={0.5}
        >
          <Text style={{ color: "#fff" }}>Show Modal</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
        hardwareAccelerated
      >
        <View style={styles.centerModal}>
          <View style={styles.modalBox}>
            <Text style={styles.header}>Modal Box</Text>
            <Text style={{ paddingVertical: SIZE.xs }}>{warningText}</Text>
            <Button title="OK" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
