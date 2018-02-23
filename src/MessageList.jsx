import React, {Component} from 'react';

import Message from './Message.jsx';

class MessageList extends Component {

  render() {    
      const messageItems = this.props.messages.map((message) => {
        const parsedMessage = JSON.parse(message);
        return(
          <Message key={parsedMessage.id} message={parsedMessage}/>
        )
      });
    return (
      <div>{messageItems}</div>
    );
  }
}  

export default MessageList;