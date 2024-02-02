import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealSummary from "../components/MealSummary";
import Subtitle from "../components/mealDetailScreen/Subtitle";
import List from "../components/mealDetailScreen/List";
import IconButton from "../components/IconButton";

const Details = ({ route, navigation }) => {
  const meal = route.params.item;

  const headerButtonPressHandler = () => {
    console.log("Pressed"); // whatever we can do like calling an api
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton onPress={headerButtonPressHandler} />,
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealSummary
        {...{
          duration: meal.duration,
          complexity: meal.complexity,
          affordability: meal.affordability,
          textStyle: styles.detailText,
        }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    margin: 8,
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
