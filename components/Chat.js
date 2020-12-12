import React from 'react';
// Bubble is a third party tool to customize styling of the gifted chat bubble 
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
// By importing keyboardAvoidingView you can solve the issue with keyboard position on Android devices
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';

// The application’s main Chat component that renders the chat UI export default class Chat extends Component
export default class Chat extends React.Component {
  // Initializing the state in order to send, receive and display messages
  constructor() {
    super();
      this.state = {
        messages: [],
        user: {
          _id:'',
          avatar: '',
        },
        loggedInText: '',
      };
  }
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          // Here you can display your apps system messages (f.e. last time a user was active or if someone new joins the chat)
          text: {name},
          createdAt: new Date(),
          system: true,
          
        },
      ],
    })
  }
  // Gifted Chat functions
  // this function below will be called when a user sends a message
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
          user={{
            _id: 1, _id:3
          }}
         />
         { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}

