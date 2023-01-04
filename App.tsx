import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { theme } from "./src/theme";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundImage from "./assets/images/background.png";
import { useCallback, useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const onNumberPick = (value: number) => {
    setIsGameOver(false);
    setUserNumber(value);
  };

  const onGameOver = () => setIsGameOver(true);

  const onStartNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const onNextRound = () => setGuessRounds((curr) => curr + 1);

  const renderScreen = () => {
    if (userNumber && isGameOver) {
      return (
        <GameOverScreen
          userNumber={userNumber}
          rounds={guessRounds}
          onStartNewGame={onStartNewGame}
        />
      );
    } else {
      if (userNumber)
        return (
          <GameScreen
            userNumber={userNumber}
            onGameOver={onGameOver}
            onNextRound={onNextRound}
          />
        );
      else return <StartGameScreen onNumberPick={onNumberPick} />;
    }
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <LinearGradient
        colors={[theme.buttonBg, theme.yellow]}
        style={styles.appContainer}
        onLayout={onLayoutRootView}
      >
        <ImageBackground
          source={BackgroundImage}
          style={styles.appContainer}
          imageStyle={styles.backgroundImage}
          resizeMode="cover"
        >
          <StatusBar style="auto" />
          <SafeAreaView style={styles.appContainer}>
            {renderScreen()}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
