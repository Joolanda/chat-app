import React from 'react';
// Bubble is a third party tool to customize styling of the gifted chat bubble 
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
// By importing keyboardAvoidingView you can solve the issue with keyboard position on Android devices
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
// establish connection to Firestore 
const firebase = require('firebase');
require('firebase/firestore');
// The application’s main Chat component that renders the chat UI export default class Chat extends Component

export default class Chat extends React.Component {
  // Initializing the state in order to send, receive and display messages
  
  constructor() {
    super();
      this.state = {
        messages: [],
        user: {
          _id:'',
          name: '',
          avatar: '',
        },
        uid: 0,
        loggedInText: '',
        //isConnected: false,
      };
  
  // Referencing to the Firestore database. 
  if (!firebase.apps.length){
    firebase.initializeApp(
      // insert my Firestore database credentials here!
      firebaseConfig =
        {
        apiKey: "AIzaSyCQ_70Di8C75S2XuCtyUS-HS21-da4Fpq8",
        authDomain: "chatapp-ee057.firebaseapp.com",
        databaseURL: "https://chatapp-ee057.firebaseio.com", 
        projectId: "chatapp-ee057",
        storageBucket: "chatapp-ee057.appspot.com",
        messagingSenderId: "1035133300241",
        appId: "1:1035133300241:web:6657ee87bf23bc781ecbb0",
        //measurementId: "G-QVZVZ3F4Z8" is optional

        });
      }
    }

  componentDidMount() {
    // create a reference to my messages collection of the database
  this.referenceMessages = firebase.firestore().collection('messages');

  //listen to authentication events
  //if(state.isConnected){this.authUnsubscribe...}
  this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
    if(!user) {
      await firebase.auth().signInAnonymously();
    }
    // update user state with currently active user data
    this.setState({
      //isConnected:true,
      user: {
        _id: user.uid,
        name: this.props.route.params.name,
        avatar: 'https://placeimg.com/140/140/any',
      },
      loggedInText: `${this.props.route.params.name} has entered the chat`,
      messages:[],
    }); 
  },
}

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  // Customize styling of the chat bubble like background color
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }

 // Wrap entire GiftedChat component into a view and add condition for KeyboardAvoidingView
  // Initializing state user
  render() {
    // Defining variables from Start screen
    let { name, colorSelect }= this.props.route.params;
    // Display user's name in the navbar at the top of the chat screen
    this.props.navigation.setOptions({ title: name });

    return (
      <View 
        style={{
          flex:1, 
          color: '#fff',
          backgroundColor: colorSelect,
        }}>
          <Text style={{ color:'#fff', marginTop: 50,  alignSelf: 'center',}} > Hey { name}, nice background!</Text>
         {/* rendering chat interface with gifted Chat component, a third party tool */}
         <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={this.state.user}
         />
         { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}

