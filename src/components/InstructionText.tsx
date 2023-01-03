import { FC, ReactNode } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { theme } from "../theme";

interface IProps {
  children?: ReactNode;
  style?: TextStyle;
}

const InstructionText: FC<IProps> = ({ children, style }: IProps) => {
  return (
    <Text
      style={{
        ...styles.text,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 32,
    color: theme.yellow,
    fontWeight: "700",
  },
});
