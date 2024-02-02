import CategoryContainer from "../components/CategoryContainer";
import { CATEGORIES } from "./../data/constants";
import { FlatList, View } from "react-native";

const Category = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const onPressHandler = () => {
      navigation.navigate("Meals Overview", { category_id: item.id });
    };
    return <CategoryContainer {...item} onPress={onPressHandler} />;
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default Category;
