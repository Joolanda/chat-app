import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import the screens
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
// import react native gesture handler
import 'react-native-gesture-handler';
// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create the navigator
const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Screen1"
        >
          <Stack.Screen
            name="Screen1"
            component={Screen1}
          />
          <Stack.Screen
              name="Screen2"
              component={Screen2}
            />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/* TEMPLATE Initial code
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Chat World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
