import { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IRootStackParamList } from "../../App";

export interface ICategoryItem {
  id: string;
  title: string;
  color: string;
}

interface IProps
  extends NativeStackScreenProps<IRootStackParamList, "mealCategories"> {}

const CategoriesScreen: FC<IProps> = ({ navigation, route }: IProps) => {
  const categories = CATEGORIES as ICategoryItem[];

  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item) => `category-${item.id}`}
        renderItem={({ item }) => (
          <CategoryGridTile
            item={item}
            onPress={() => navigation.navigate("mealsOverview")}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
