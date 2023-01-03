import { FC, ReactNode } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { theme } from "../theme";

interface IProps {
  children?: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const PrimaryButton: FC<IProps> = ({ children, onPress }: IProps) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? { ...styles.innerContainer, ...styles.pressed }
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#9b1a5b" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    borderRadius: 28,
    elevation: 2,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: theme.buttonBg,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
