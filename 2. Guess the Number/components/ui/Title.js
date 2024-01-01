import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;

const styles = StyleSheet.create({
  title: {
    maxWidth: "80%",
    width: 300,
    fontFamily: "open-sans-bold",
    color: "white",
    padding: 12,
    fontSize: 24,
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
  },
});
