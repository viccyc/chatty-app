import React, {Component} from 'react';
import Header from './Header.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';

const socket = new WebSocket("ws://localhost:3001");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {currentUser: {name: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: [],
        messageType: '',
        system: ''
      };  
    this.onSubmit = this.onSubmit.bind(this);
   }

  componentDidMount() {
    console.log("ComponentDidMount <App/>");
    socket.onmessage = (message) => {
      // const parsedMsg = JSON.parse(message.data);
      // console.log("in App onmessage, state currentuser: ", this.state.currentUser.name);
      // console.log("in App onmessage, message: ", parsedMsg);
      // if (parsedMsg.messageType === 'incomingNotification') {
      //   parsedMsg.system = (`${parsedMsg.username} changed their name to blah..`);
      // }
      // console.log("on msg: ", parsedMsg);
      const messages = this.state.messages.concat(message.data);
      this.setState({messages: messages});
      // this.setState({currentUser: parsedMsg.username});
    }
  }

  onSubmit(message) {
    message.messageType = 'postMessage';
    socket.send(JSON.stringify(message));
    console.log('Message sent to server', message);

    // check if msg.username is diff to the state.username
    // if it is, send another message with msgtype 'postNotification' and the content to be the 'system' msg then check in Msg compoent 
    // console.log('App on submit, anything in current user: ', this.state.currentUser.name);
    if (message.username !== this.state.currentUser.name) {
      message.content = (`${this.state.currentUser.name} changed their name to ${message.username}`);
      message.messageType = 'postNotification';
      socket.send(JSON.stringify(message));
      console.log('System Message sent to server', message);

      const newUser = this.state.currentUser;
      newUser.name = message.username;
      this.setState({currentUser: newUser});
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <MessageList messages={this.state.messages}/>
        <Chatbar currentUser={this.state.currentUser.name} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;