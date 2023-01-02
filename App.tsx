import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <StartGameScreen />
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
