import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';

// The application’s main Chat component that renders the chat UI export default class Chat extends Component {...
export default class Chat extends React.Component {
  // Initializing state user
  render() {
    //Defining variable(s) from Start screen
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Screen2!</Text>
      </View>
    )
  }
}

