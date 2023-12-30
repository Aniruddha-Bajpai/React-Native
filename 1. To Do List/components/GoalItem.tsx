import { StyleSheet, Text, View, Pressable } from "react-native";

type GoalItem = {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
};

function GoalItem({ text, id, onDeleteItem }: GoalItem) {
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={onDeleteItem.bind(globalThis, id)}
    >
      <View style={styles.goal}>
        <Text style={styles.light}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    padding: 8,
    color: "white",
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  light: {
    color: "white",
  },
});
