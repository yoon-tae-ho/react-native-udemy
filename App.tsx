import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { theme } from "./src/theme";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundImage from "./assets/images/background.png";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);

  const onNumberPick = (value: number | null) => {
    setIsGameOver(false);
    setUserNumber(value);
  };

  const onGameOver = () => setIsGameOver(true);

  const renderScreen = () => {
    if (userNumber && isGameOver) {
      return <GameOverScreen />;
    } else {
      if (userNumber)
        return <GameScreen userNumber={userNumber} onGameOver={onGameOver} />;
      else return <StartGameScreen onNumberPick={onNumberPick} />;
    }
  };

  return (
    <LinearGradient
      colors={[theme.buttonBg, theme.yellow]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={BackgroundImage}
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style="auto" />
        <SafeAreaView style={styles.appContainer}>
          {renderScreen()}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
