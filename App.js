import React from "react";
import ReactNative from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Header from "./header"; // This needs to to be the correct path to the file.

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
