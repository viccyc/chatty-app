import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      messageText: '',
      messageType: ''
    };
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onMessageKeyPress = this.onMessageKeyPress.bind(this);
  }

  onMessageKeyPress(event) {
    if(event.key === 'Enter') {
      // receiving the text in the input field and passing it up to App
      const message = {
        username: this.state.currentUser,
        content: this.state.messageText,
        messageType: this.state.messageType
      };
    this.props.onSubmit(message);
    this.setState({messageType: ''});
    }
  }

  onChangeMessage(event) {
    this.setState({messageText: event.target.value});
  }

  onChangeUser(event) {
    this.setState({currentUser: event.target.value});
  }

  render() {
    return (
      <footer className="chatbar">
        <input 
          className="chatbar-username" 
          placeholder="Your Name (Optional)" 
          defaultValue={this.props.currentUser}
          onChange={this.onChangeUser}          
          />
        <input
          value={this.state.messageText}
          className="chatbar-message"
          onChange={this.onChangeMessage}
          onKeyPress={this.onMessageKeyPress}
          placeholder="Type a message and hit ENTER"
          />
      </footer>
    );
  }
}

export default Chatbar;
