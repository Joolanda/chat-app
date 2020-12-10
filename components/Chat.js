import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';

// The application’s main Chat component that renders the chat UI export default class Chat extends Component {...
export default class Chat extends React.Component {
  // Initializing state user
  render() {
    //Defining variable(s) from Start screen
    let name = this.props.route.params.name;
    let color = this.props.route.params.color;
    this.props.navigation.setOptions({ title: name, backgroundColor: color });
    return (
      <View 
        style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: color}}>
        <Text>Hello Screen2!</Text>
      </View>
    )
  }
}

