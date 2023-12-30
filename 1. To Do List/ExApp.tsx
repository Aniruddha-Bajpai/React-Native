import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

// root components that is rendered as a root components
// every other components must go as a descendent of this components

/* Points to know- 
 1. Text must go inside the Text component, Though this won't give error 
 on a web but native devices are strict and they require to understand on 
 content we mean to show. 
 Text: component is for displaying text
 View: its for holding multiple child components, a container component for 
 holding our layouts or childrens
 2. There is no CSS in react-native, we add css in two ways =
  inline 
  stylesheet objects
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello Worlds!</Text>
      <Text>
       <Button  title='Click me!' />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// allows us to clearly separate our styles from our code and also increases the
// reusability
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 10, 
    padding: 20,
    borderWidth: 1, 
    borderColor: 'red'
  }
});
