import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import AllPlaces from "../screens/AllPlaces";
import AddPlace from "../screens/AddPlace";
import IconButton from "../components/ui/IconButton";
import { themeColors } from "../constants/colors";
import MapScreen from "../screens/MapScreen";

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
  Map: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColors.primary500,
        },
        headerTintColor: themeColors.gray700,
        contentStyle: {
          backgroundColor: themeColors.gray700,
        },
      }}
    >
      <Stack.Screen
        name="AllPlaces"
        component={AllPlaces}
        options={({ navigation }) => ({
          title: "Your Favorite Places!",
          headerRight: ({ tintColor }) => (
            <IconButton
              key={`all-places-header-right-button-${Date.now()}`}
              iconName="add"
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate("AddPlace")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddPlace"
        component={AddPlace}
        options={{
          title: "Add a Place!",
        }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              key={`map-screen-header-right-button-${Date.now()}`}
              iconName="save"
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate("AddPlace")}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
