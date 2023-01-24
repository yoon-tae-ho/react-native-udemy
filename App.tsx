import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <View style={styles.appContainer}>
        <StatusBar style="light" />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </View>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
