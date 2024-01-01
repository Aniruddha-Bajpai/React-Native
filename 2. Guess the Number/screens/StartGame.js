import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import FlexRow from "../components/ui/FlexRow";

const StartGame = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const onChangeInput = (enteredText) => setEnteredNumber(enteredText);

  const onReset = () => setEnteredNumber("");

  const onConfirm = () => {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: onReset }]
      );
      return;
    }

    onPickNumber(choosenNumber);
  };

  const marginTop = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <Instruction>Enter a number</Instruction>
            <TextInput
              maxLength={2}
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={onChangeInput}
              autoCapitalize="none"
              style={styles.userInput}
              keyboardType="number-pad"
            />
            <FlexRow>
              <View style={styles.flex1}>
                <PrimaryButton onPress={onReset}> Reset </PrimaryButton>
              </View>
              <View style={styles.flex1}>
                <PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
              </View>
            </FlexRow>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  userInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    color: Colors.accent500,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
  },
  flex1: {
    flex: 1,
  },
});
