import React from 'react';
import { View, Text, Button } from 'react-native';
// The application’s Start component that renders the openings-screen UI export default class Start extends Component {...
export default class Start extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Screen1!</Text>
        <Button
          title="Go to Screen 2"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </View>
    )
  }
}