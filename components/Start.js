import React from 'react';
import { ImageBackground, View, Text, Button, TextInput, StyleSheet } from 'react-native';
// The application’s Start component that renders the openings-screen UI export default class Start extends Component {...
const image = require('../assets/background-image.png');
const icon = require('../assets/icon.svg');
export default class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', backgroundColor:'#fff' };
  }

  render() {
    return (
    // Setting the background image to cover the whole screen 
      <ImageBackground source={image} style={styles.backgroundImage}>
       <View style={styles.container}>
        <Text style={styles.title}>Chat App!</Text>
        <TextInput 
          style={styles.nameBox}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder='Your Name'
        /> 
        <View style={{margin: 10,alignItems: 'flex-start'}}>
          <Text style={{alignContent: 'flex-start', fontSize:16, fontWeight: '300', color: '#757083', opacity: 100. }}>Choose Background Color:</Text>
        </View>
        <View style={styles.colorSelection}>
         {/* users can choose a background color for chatting page */}
            <View style={[styles.colorButton, styles.color1]}></View>
            <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor:'#474056'}}></View>
            <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor:'#8A95A5'}}></View>
            <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor:'#B9C6AE'}}></View>
        </View>
        <View style={styles.startChattingButton}>     
        {/* <Button style={styles.buttonText} */}
         <Text style={styles.buttonText}
            onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name})}>Start Chatting</Text>
              {/* display user's name in the navigation bar at the top of the chat screen */}
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
    flex: 2,
    width:'88%',
    height: 80,
    borderColor: 'gray',
    borderWidth: 1.5,
    opacity: 50,
    borderWidth: 1,
    marginBottom: 20
  },
  colorSelection: {
    flex: 3,
    width:'88%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  colorButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  color1: {
    backgroundColor: '#090C08',
  },
  color2: {
    backgroundColor:'#474056',
  },
  color3: {
    backgroundColor:'#8A95A5',
  },color4: {
    backgroundColor:'#B9C6AE',
  },
  textColorSelection: {
    fontSize: 16,
    fontWeight: '300',
    color:'#757083',
    opacity: 100,
    alignSelf: 'auto',
    marginBottom: 10,
  },
  startChattingButton: {
    flex:2,
    backgroundColor:'#757083',
    width:'88%',
    height: 50,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    margin: 15,
  }
});