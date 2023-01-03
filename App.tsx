import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { theme } from "./src/theme";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundImage from "./assets/images/background.png";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const onNumberPick = (value: number | null) => setUserNumber(value);

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
        {!userNumber ? (
          <StartGameScreen onNumberPick={onNumberPick} />
        ) : (
          <GameScreen />
        )}
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
