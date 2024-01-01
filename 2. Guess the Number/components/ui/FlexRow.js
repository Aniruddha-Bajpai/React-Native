import { StyleSheet, View } from "react-native";

const FlexRow = ({ children }) => {
  return <View style={styles.buttonContainer}>{children}</View>;
};

export default FlexRow;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
  },
});
