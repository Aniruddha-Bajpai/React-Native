import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/constants";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route, navigation }) => {
  const category_id = route.params.category_id;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(category_id));

  const renderMealItem = (item) => {
    return <MealItem {...item} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === category_id
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [category_id, navigation]);

  return (
    <View style={styles.constainer}>
      <Text>Meals Overview - {category_id}</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          renderMealItem({
            ...item,
            onPress: () => navigation.navigate("Details", { item }),
          })
        }
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
