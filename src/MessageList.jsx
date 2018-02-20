import React, {Component} from 'react';

import Message from './Message.jsx';

class MessageList extends Component {

  render() {    
    console.log("Rendering <Message List/>");
      const messageItems = this.props.messages.map((message) => {
        return(
          <Message key={message.id} message={message}/>
        )
      });
    return (
      <div>{messageItems}</div>
    );
  }
};  

export default MessageList;