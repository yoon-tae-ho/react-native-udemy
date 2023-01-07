import { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export interface ICategoryItem {
  id: string;
  title: string;
  color: string;
}

const CategoriesScreen: FC = () => {
  const categories = CATEGORIES as ICategoryItem[];

  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item) => `category-${item.id}`}
        renderItem={({ item }) => <CategoryGridTile item={item} />}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
