import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
      if (this.props.message.messageType === "incomingNotification") {
        return( 
          <main className="messages">
            <div className="message system">{this.props.message.content}
            </div>
        </main>);            
      } else {
        return( 
          <main className="messages">
            <div>
              <span className="message-username">{this.props.message.username}</span>
              <span className="message-content">{this.props.message.content}</span>
            </div>
            <div className="message system">
            </div>
          </main>);
      }
  }
}
 
export default Message;


