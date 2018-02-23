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
        system: '',
        userCount: 0
      };  
    this.onSubmit = this.onSubmit.bind(this);
   }

  componentDidMount() {
    socket.onmessage = (message) => {
      const parsedMsg =  JSON.parse(message.data);
      if (parsedMsg.messageType === "count") {
        // const userMsg = (`${parsedMsg.numClients} users online`);
        this.setState({userCount: parsedMsg.numClients});
      } else {
        const messages = this.state.messages.concat(message.data);
        this.setState({messages: messages});      }
    }
  }

  onSubmit(message) {
    message.messageType = 'postMessage';
    socket.send(JSON.stringify(message));
    
    if (message.username !== this.state.currentUser.name) {
      message.content = (`${this.state.currentUser.name} changed their name to ${message.username}`);
      message.messageType = 'postNotification';
      socket.send(JSON.stringify(message));

      const newUser = this.state.currentUser;
      newUser.name = message.username;
      this.setState({currentUser: newUser});
    }
  }

  render() {
      return (
        <div>
          <Header userCount={this.state.userCount}/>
          <MessageList messages={this.state.messages}/>
          <Chatbar currentUser={this.state.currentUser.name} onSubmit={this.onSubmit}/>
      </div>
      );
  }
}

export default App;