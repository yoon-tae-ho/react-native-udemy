import { FC, ReactNode } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { themeColors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

interface IProps extends PressableProps {
  iconName?: keyof typeof Ionicons.glyphMap;
  children?: ReactNode;
}

const OutlinedButton: FC<IProps> = ({
  iconName,
  children,
  ...props
}: IProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      {...props}
    >
      {iconName && (
        <Ionicons
          name={iconName}
          size={18}
          color={themeColors.primary500}
          style={styles.icon}
        />
      )}
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: themeColors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: themeColors.primary500,
  },
});

export default OutlinedButton;
