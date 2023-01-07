import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Text, View } from "react-native";
import { IRootStackParamList } from "../../App";

interface IProps {
  navigation: NativeStackScreenProps<IRootStackParamList, "mealCategories">;
}

const MealsOverviewScreen: FC<IProps> = ({ navigation }: IProps) => {
  return (
    <View>
      <Text>MealsOverviewScreen</Text>
    </View>
  );
};

export default MealsOverviewScreen;
