import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FC, useLayoutEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { IRootStackParamList } from "../../App";
import { MEALS } from "../../data/dummy-data";
import { CATEGORIES } from "../../data/dummy-data";
import MealItem from "../components/MealItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ICategoryItem } from "./CategoriesScreen";

export interface IMealItem {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

interface IRouteParams {
  categoryId: string;
}

const MealsOverviewScreen: FC = () => {
  const { categoryId } = useRoute<RouteProp<IRootStackParamList>>()
    .params as IRouteParams;
  const navigation =
    useNavigation<NativeStackNavigationProp<IRootStackParamList>>();
  const meals = MEALS as IMealItem[];
  const categoris = CATEGORIES as ICategoryItem[];

  const displayedMeals = meals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) !== -1
  );

  const category = categoris.find(
    (category) => category.id === categoryId
  )?.title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category ?? "Meals Overview",
    });
  }, [categoryId, navigation]);

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => `mealsOverview-${item.id}`}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
};

export default MealsOverviewScreen;
