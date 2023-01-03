import { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../theme";

interface IProps {
  children?: ReactNode;
}

const Title: FC<IProps> = ({ children }: IProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});
