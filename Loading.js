import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.constainer}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the Expo Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
