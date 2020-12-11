import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';

// The application’s main Chat component that renders the chat UI export default class Chat extends Component {...
export default class Chat extends React.Component {
  constructor() {
    super();
  }
 
  // Initializing state user
  render() {
    //Defining variables from Start screen
    let { name, colorSelect }= this.props.route.params;
    // Display user's name in the navbar at the top of the chat screen
    this.props.navigation.setOptions({ title: name });

    return (
      <View 
        style={{
          flex:1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: colorSelect
        }}>
        <Text>Hello Screen2!</Text>
      </View>
    )
  }
}

