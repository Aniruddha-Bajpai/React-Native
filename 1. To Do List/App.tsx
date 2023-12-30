import { Text, View, Button, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

// export default function App() {
//   return (
//     <View style={styles.mainContainer}>
//       <View style={{ ...styles.box, ...styles.box1 }}>
//         <Text>1</Text>
//       </View>
//       <View style={{ ...styles.box, ...styles.box2 }}>
//         <Text>2</Text>
//       </View>
//       <View style={{ ...styles.box, ...styles.box3 }}>
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }

/*
default flexbox organises chilrens in columns while in web it does in row.
Two axis
for row direction
Main : left to right
Cross : top to bottom

const styles = StyleSheet.create({
  mainContainer: {
    width: "80%",
    height: 300,
    margin: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  box1: {
    flex: 2,
    backgroundColor: "red",
  },
  box2: {
    flex: 2,
    backgroundColor: "blue",
  },
  box3: {
    flex: 4,
    backgroundColor: "green",
  },
});
 */

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [goals, setGoals] = useState<Array<{ id: string; text: string }>>([]);

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const addGoalHandler = (goalsTextInput: string) => {
    if (goalsTextInput) {
      setGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: goalsTextInput, id: Math.random().toString() },
      ]);
    }
  };

  const deleteGoalItem = (id: string) => {
    setGoals((prevGoalItems) => prevGoalItems.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add New Goal" color="#a065cc" onPress={showModal} />
        <GoalInput
          visible={isModalVisible}
          onCancel={closeModal}
          onAddGoal={addGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <Text style={styles.goalsHeading}># List of goals</Text>
          <FlatList
            data={goals}
            alwaysBounceVertical
            keyExtractor={(item) => item.text + "$" + item.id}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalItem}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",
    borderWidth: 2,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsHeading: {
    color: "#5e0acc",
    fontWeight: "500",
    fontSize: 20,
  },
  goalsContainer: {
    padding: 10,
    flex: 5,
  },
});

/** 
 flexbox -> collection of css on controlling the overall layout. positioning
 elements inside a container
 cross
 main

 flex: 1 to occupy all the available space
 flexDirection: controls the direction
 alignItems: flex-start 


// ScrollView renders all its child items. If we have thousand of childrens,
// then it would render them all and may have performance issues
// button is a component which does'nt have a style prop
// style inheritance is not present in react-native

 */
