import { FC, ReactNode } from "react";
import { Text, View } from "react-native";

interface IProps {
  children?: ReactNode;
}

const PrimaryButton: FC<IProps> = ({ children }: IProps) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
