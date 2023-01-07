import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
