import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";

interface IProps {
  children?: ReactNode;
}

const Card: FC<IProps> = ({ children }: IProps) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: theme.bg,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
