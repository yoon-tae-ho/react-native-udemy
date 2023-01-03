import { FC, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";

interface IProps {
  children?: ReactNode;
}

const GuessedNumber: FC<IProps> = ({ children }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default GuessedNumber;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: theme.yellow,
    borderWidth: 4,
    borderRadius: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
    color: theme.yellow,
  },
});
