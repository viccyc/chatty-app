import React, {Component} from 'react';

console.log("Running function <Message/>");

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return( 
      <div>
        <span className="message-username" >{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>
      </div>
    );
  }
}
 
export default Message;


