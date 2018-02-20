import React, {Component} from 'react';
import Header from './Header.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: [
          {
            id: 1,
            username: "Bob",
            content: "Has anyone seen my marbles?",
          },
          {
            id: 2,
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ]
      };  
  }

  componentDidMount() {
    this.setState ({loading: false});
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <Header/>
          <MessageList messages={this.state.messages}/>
          <Chatbar currentUser={this.state.currentUser.name}/>
        </div>
      );
    }
  }
}

export default App;