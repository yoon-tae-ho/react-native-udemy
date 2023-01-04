import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SuccessImage from "../../assets/images/success.png";
import Title from "../components/Title";
import { theme } from "../theme";
import PrimaryButton from "../components/PrimaryButton";

interface IProps {
  userNumber: number;
  rounds: number;
  onStartNewGame: () => void;
}

const GameOverScreen: FC<IProps> = ({
  userNumber,
  rounds,
  onStartNewGame,
}: IProps) => {
  return (
    <View style={styles.screenContainer}>
      <Title>Game is Over!!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={SuccessImage} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highLight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highLight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start next game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: theme.buttonBg,
    overflow: "hidden",
    margin: 36,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  summaryText: {
    textAlign: "center",
    fontFamily: "open-sans-regular",
    fontSize: 22,
    marginBottom: 32,
  },
  highLight: {
    fontFamily: "open-sans-bold",
    color: theme.bg,
  },
});
