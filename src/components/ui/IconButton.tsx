import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";

interface IProps {
  iconName: keyof typeof Ionicons.glyphMap;
  size: number;
  color?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

const IconButton: FC<IProps> = ({ iconName, size, color, onPress }: IProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
