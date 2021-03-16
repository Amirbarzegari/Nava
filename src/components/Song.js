import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const song = ({ songTitle }) => {
  return (
      <View style={styles.box}>
        <View style={styles.leftSide}>
          <Ionicons name="reorder-two-sharp" size={24} color="black" />
          <Text>{songTitle}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Feather name="more-vertical" size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default song;

const styles = StyleSheet.create({
  box: {
    width: 350,
    height: 60,
    borderRadius: 10,
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  icons: {
    flexDirection: "row",
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
