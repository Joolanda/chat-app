import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

// The application’s main Chat component that renders the chat UI export default class Chat extends Component {...
export default class Chat extends React.Component {
  //initializing the state in order to send, receive and display messages
  constructor() {
    super();
      this.state = {
        messages: [],
      }
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
  // customize styling of the chat bubble like background color
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
 
  // Initializing state user
  render() {
    //Defining variables from Start screen
    let { name, colorSelect }= this.props.route.params;
    // Display user's name in the navbar at the top of the chat screen
    this.props.navigation.setOptions({ title: name });

    return (
      <View 
        style={{
          flex:1, 
          backgroundColor: colorSelect
        }}>
         {/* rendering chat interface with gifted Chat component, a third party tool */}
         <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
         />
      </View>
    )
  }
}

