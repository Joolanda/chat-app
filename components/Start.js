import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// The application’s Start component that renders the openings-screen UI export default class Start extends Component {...
export default class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', backgroundColor:'#757083' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chat App!</Text>
        <TextInput 
          style={styles.box3}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Your Name'
        />        
        <Button style={styles.box4}
          title="Start Chatting"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </View>
    )
  }
}
// Creating Styling with Stylesheet component of react native and using the Design Specifications. With flexbox.
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    flex:10,
    fontSize:45,
    fontWeight:'600',
    color:'#FFFFFF',
    alignSelf: 'center',
  },
  box3: {
    flex: 1,
    width:200,
    height: 20,
    borderColor: 'gray',
    borderWidth: 1
  },
  box4: {
    flex:1,
    fontSize:16,
    fontWeight:'600',
    color: '#FFFFFF',
    width:50,
    height: 50,
    //backgroundColor:'#757083',
  },
});