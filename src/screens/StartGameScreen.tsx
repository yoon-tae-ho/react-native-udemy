import { FC, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { theme } from "../theme";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

interface IProps {
  onNumberPick: (value: number | null) => void;
}

const StartGameScreen: FC<IProps> = ({ onNumberPick }: IProps) => {
  const [value, setValue] = useState<string>("");

  const onTextChange = (text: string) => setValue(text);

  const onResetPress = () => setValue("");

  const onConfirmPress = () => {
    const number = parseInt(value);
    if (Number.isNaN(number) || number < 1 || number > 99) {
      return Alert.alert(
        "Invalid Number!",
        "The number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: onResetPress,
          },
        ]
      );
    }

    onNumberPick(number);
  };

  return (
    <View style={styles.screenContainer}>
      <Title>Start Game!</Title>
      <Card>
        <InstructionText>Your Number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          value={value}
          onChangeText={onTextChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onResetPress}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onConfirmPress}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 100,
  },
  input: {
    color: theme.yellow,
    fontSize: 32,
    height: 50,
    aspectRatio: 1,
    borderBottomWidth: 2,
    borderColor: theme.yellow,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
