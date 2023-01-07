import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export interface IRootStackParamList extends ParamListBase {}

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#862f07",
            },
            contentStyle: {
              backgroundColor: "#2c2626",
            },
            headerTintColor: "white",
          }}
          initialRouteName="mealCategories"
        >
          <Stack.Screen
            options={{
              title: "All Categories",
            }}
            name="mealCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen name="mealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
