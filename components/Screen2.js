import React from 'react';
import { View, Text } from 'react-native';

export default class Screen2 extends react.Component {
  render() {
    let name = this.props.route.params.name; // OR ...
    // let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        {/* Rest of the UI */}
        <Text>Chat Screen2 </Text>
      </View>
    )
  }
}