import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => (
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>
);

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
