import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import AllPlaces from "../screens/AllPlaces";
import AddPlace from "../screens/AddPlace";
import IconButton from "../components/ui/IconButton";
import { themeColors } from "../constants/colors";

export const Stack = createNativeStackNavigator();

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
              key={`header-right-button-${Date.now()}`}
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
    </Stack.Navigator>
  );
};

export default StackNavigator;
