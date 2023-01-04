import { FC, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import GuessedNumber from "../components/game/GuessedNumber";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

interface IProps {
  userNumber: number;
  onGameOver: () => void;
  onNextRound: () => void;
}

const getRandomBetween = (
  min: number,
  max: number,
  exclude?: number
): number => {
  if (min >= max || max - min === 1) return min;

  const random = Math.floor(Math.random() * (max - min)) + min;

  if (exclude && random === exclude) return getRandomBetween(min, max, exclude);
  else return random;
};

let min = 1,
  max = 100;

const GameScreen: FC<IProps> = ({
  userNumber,
  onGameOver,
  onNextRound,
}: IProps) => {
  const [guessedNumber, setGuessedNumber] = useState<number>(
    getRandomBetween(min, max, userNumber)
  );

  useEffect(() => {
    if (guessedNumber === userNumber) onGameOver();
  }, [guessedNumber, userNumber]);

  useEffect(() => {
    min = 0;
    max = 0;
  }, []);

  const onNextNumber = (isLower: boolean) => {
    if (
      (isLower && guessedNumber < userNumber) ||
      (!isLower && guessedNumber > userNumber)
    )
      return Alert.alert("Don't lie!", "You know that this is wrong.", [
        { text: "Okay", style: "cancel" },
      ]);

    if (isLower) max = guessedNumber;
    else min = guessedNumber + 1;
    setGuessedNumber(getRandomBetween(min, max));
    onNextRound();
  };

  return (
    <View style={styles.screenContainer}>
      <Title>Game Screen</Title>
      <View style={styles.numberContainer}>
        <GuessedNumber>{guessedNumber}</GuessedNumber>
      </View>
      <Card>
        <InstructionText style={styles.higherText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => onNextNumber(true)}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => onNextNumber(false)}>+</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  numberContainer: {
    marginVertical: 32,
    marginHorizontal: 20,
  },
  higherText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 32,
  },
  buttonContainer: {
    flex: 1,
  },
});
