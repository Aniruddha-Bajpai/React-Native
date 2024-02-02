import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";
import MealsOverview from "./screens/MealsOverview";
import Details from "./screens/MealsDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourites from "./screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: { backgroundColor: "#3f2f25" },
        drawerInactiveTintColor: "#e4baa1",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
        headerStyle: {
          backgroundColor: "#351401",
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Category}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverview} />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ title: "About the Meal" }}
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
