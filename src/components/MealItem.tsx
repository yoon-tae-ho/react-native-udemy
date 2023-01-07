import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMealItem } from "../screens/MealsOverviewScreen";

interface IProps {
  item: IMealItem;
}

const MealItem: FC<IProps> = ({ item }: IProps) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text>{item.title}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    height: 400,
    resizeMode: "contain",
  },
});
