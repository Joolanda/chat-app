import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// The application’s Start component that renders the openings-screen UI export default class Start extends Component {...
export default class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:45, fontWeight: '600', fontColor: '#FFFFFF'}}>Chat App!</Text>
        <TextInput 
          style={styles.box2}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Your Name'
        />        
        <Button
          title="Start Chatting"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  box2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1

  }

});