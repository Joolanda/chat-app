import React from 'react';
import { ImageBackground, View, Text, Button, TextInput, StyleSheet } from 'react-native';
// The application’s Start component that renders the openings-screen UI export default class Start extends Component {...
const image = require('../assets/background-image.png');

export default class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', backgroundColor:'#fff' };
  }

  render() {
    return (
    // Setting the background image to cover the whole screen 
      <ImageBackground source={image} style={styles.backgroundImage}>
       <View style={styles.container}>
        <Text style={styles.title}>Chat App!</Text>
        <TextInput 
          style={styles.nameBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}

          placeholder='Your Name'
        /> 
         {/* users can choose a background color for chatting page */}
        <Text style={styles.text}>Choose Background Color:</Text>
        <View style={styles.colorButtons}>

        </View>
        <View style={styles.startChatttingButton}>     
        {/* <Button style={styles.buttonText} */}
         <Text style={styles.buttonText}
            onPress={() => this.props.navigation.navigate('Chat')}>Start Chatting</Text>
          {/* title="Start Chatting" */}
          {/* onPress={() => this.props.navigation.navigate('Chat', { })}
        /> */}
        </View>  
      </View>
     </ImageBackground>  
    )
  }
}
// Creating Styling with Stylesheet component of react native and using the Design Specifications. With flexbox.
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '88%',
    height: '44%',
    marginBottom: 30
  },
  backgroundImage: {
    flex:1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    },
  title: {
    flex:10,
    fontSize:45,
    fontWeight:'600',
    color:'#FFFFFF',
    alignSelf: 'center',
    marginTop: 60,
  },
  nameBox: {
    flex: 1,
    width:'88%',
    height: 80,
    borderColor: 'gray',
    borderWidth: 1.5,
    opacity: 50,
    borderWidth: 1
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    color:'#757083,'
  },
  startChattingButton: {
    flex:1,
    backgroundColor:'#757083',
    width:'88%',
    height: 40,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 10,

  }
});