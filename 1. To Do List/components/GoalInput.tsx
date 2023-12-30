import { useState } from "react";
import {
  View,
  Image,
  Modal,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";

function GoalInput(props: {
  visible: boolean;
  onCancel: () => void;
  onAddGoal: (text: string) => void;
}) {
  const [goalsTextInput, setGoalsTextInput] = useState<string>("");
  const goalInputHandler = (enteredText: string) => {
    setGoalsTextInput(enteredText);
  };
  const onAddGoal = () => {
    props.onAddGoal(goalsTextInput);
    setGoalsTextInput("");
    props.onCancel();
  };
  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.input}>
        <Image
          style={styles.image}
          source={require("./../assets/favicon.png")}
        />
        <TextInput
          value={goalsTextInput}
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} color={"#5bca"} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    width: "100%",
    padding: 16,
    borderWidth: 1,
    marginRight: 8,
    color: "#120438",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 70,
    height: 70,
    margin: 20,
  },
});

export default GoalInput;
