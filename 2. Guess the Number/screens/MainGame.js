import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import Guess from "../components/game/Guess";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import FlexRow from "../components/ui/FlexRow";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const MainGame = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);

  const { width, height } = useWindowDimensions();

  const [rounds, setRounds] = useState([initialGuess]);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const onNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNum);
    setRounds((prev) => [newRndNum, ...prev]);
  }; // direction - lower, higher

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundListLength = rounds.length;

  let content = (
    <>
      <Guess>{currentGuess}</Guess>
      <Card>
        <Instruction style={styles.instructionText}>
          Higher or lower ?
        </Instruction>
        <FlexRow>
          <View style={styles.flex1}>
            <PrimaryButton onPress={onNextGuess.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.flex1}>
            <PrimaryButton
              style={styles.flex1}
              onPress={onNextGuess.bind(this, "higher")}
            >
              <Ionicons name="md-add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </FlexRow>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerLandscape}>
          <View style={styles.flex1}>
            <PrimaryButton onPress={onNextGuess.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <Guess>{currentGuess}</Guess>
          <View style={styles.flex1}>
            <PrimaryButton
              style={styles.flex1}
              onPress={onNextGuess.bind(this, "higher")}
            >
              <Ionicons name="md-add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - index}
              guess={item}
            >
              {item}
            </GuessLogItem>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    padding: 24,
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  buttonContainerLandscape: {
    flexDirection: "row",
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default MainGame;
