import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>Lecture Section 4.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
  },
});
