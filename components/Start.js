import React from 'react';
import { ImageBackground, View, Text, Button, TextInput, StyleSheet } from 'react-native';
// The application’s Start component that renders the openings-screen UI export default class Start extends Component {...
const image = require('../assets/background-image.png');
const icon = require('../assets/icon.svg');
export default class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', color:'#B9C6AE' };
  }

  render() {
    return (
    // Setting the background image to cover the whole screen 
      <ImageBackground source={image} style={styles.backgroundImage}>
       <Text style={styles.title}>Chat App!
       </Text>
        <View style={styles.container}>
          <TextInput 
          style={styles.nameBox}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder='Your Name'
          /> 
          <Text style={{ alignSelf: 'center', width: '88%', marginBottom: 10, fontSize:16, fontWeight: '300', color: '#757083', opacity: 100 }}>Choose Background Color:
          </Text>
          <View style={styles.colorSelection}>
            {/* users can choose a background color for chatting page */}
            <View 
              onPress={() => this.setState({color: '#090C08'})} 
              style={[styles.colorButton, styles.color1]}></View>
            <View 
              onPress={() => this.setState({color: '#474056'})} 
              style={[styles.colorButton, styles.color2]}></View>
            <View 
              onPress={() => this.setState({color: '#8A95A5'})} 
              style={[styles.colorButton, styles.color3]}></View>
            <View 
              onPress={() => this.setState({color: '#B9C6AE'})} 
              style={[styles.colorButton, styles.color4]}></View>
          </View>
          <View style={styles.startChattingButton}>     
            {/* <Button style={styles.buttonText} */}
          <Button 
           style={styles.buttonText}
            onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name, color: this.state.color})}
           title="Start Chatting"
          />
          {/* display user's name in the navigation bar at the top of the chat screen */}
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
    backgroundColor: '#fff',
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
    flex:1,
    fontSize:45,
    fontWeight:'600',
    color:'#FFFFFF',
    alignSelf: 'center',
    marginTop: 60,
  },
  nameBox: {
    fontSize: 16,
    fontWeight: '300',
    width:'88%',
    height: 55,
    borderColor: 'gray',
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderRadius: 3,
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
    alignItems: 'flex-start',
    marginBottom: 10
  },
  colorButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
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
    backgroundColor:'#757083',
    width:'88%',
    height: 50,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    margin: 5,
  }
});