import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Instruction = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: "open-sans",
    fontSize: 24,
  },
});
