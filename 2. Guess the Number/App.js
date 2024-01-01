import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGame from "./screens/StartGame";
import MainGame from "./screens/MainGame";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [loaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  const onPickNumber = (pickNumber) => {
    // this state's are batched by react to avoid successive rerenders
    setUserNumber(pickNumber);
    setGameIsOver(false);
  };

  const onGameOver = (rounds) => {
    setGameIsOver(true);
    setRounds(rounds);
  };

  const onStartNewGame = () => {
    setUserNumber(null);
    setRounds(0);
  };

  let screen = <StartGame onPickNumber={onPickNumber} />;

  if (userNumber) {
    screen = <MainGame userNumber={userNumber} onGameOver={onGameOver} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={rounds}
        onStartNewGame={onStartNewGame}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          resizeMode="cover"
          source={require("./assets/bg-guess.jpg")}
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
