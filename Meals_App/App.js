import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";
import MealsOverview from "./screens/MealsOverview";
import { Text } from "react-native";
import Details from "./screens/MealsDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
            headerStyle: {
              backgroundColor: "#351401",
            },
          }}
        >
          <Stack.Screen
            name="Meals Category"
            component={Category}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverview} />
          <Stack.Screen
            name="Details"
            component={Details}
            // options={{  // when we don't need any direct commumication with the component
            //   headerRight: () => <Button title="Tap Me!" />,
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
