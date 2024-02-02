import { View, Text, Button, StyleSheet } from "react-native";

// react-navigation always provides route and navigation to all your navigation screens
function UserScreen({ route, navigation }) {
  const openDrawerHandler = () => {
    navigation.toggleDrawer(); // interacting drawer outside of navigation screen
  };
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
