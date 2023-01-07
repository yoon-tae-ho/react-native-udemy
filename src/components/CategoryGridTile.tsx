import { FC } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  GestureResponderEvent,
} from "react-native";
import { ICategoryItem } from "../screens/CategoriesScreen";

interface IProps {
  item: ICategoryItem;
  onPress?: (event: GestureResponderEvent) => void;
}

const CategoryGridTile: FC<IProps> = ({ item, onPress }: IProps) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => ({
          ...styles.pressable,
          ...(pressed ? styles.pressablePressed : null),
        })}
        onPress={onPress}
      >
        <View style={{ ...styles.innerContainer, backgroundColor: item.color }}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 160,
    borderRadius: 8,
    elevation: 4,

    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressable: {
    flex: 1,
  },
  pressablePressed: {
    opacity: 0.6,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
