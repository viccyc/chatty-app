import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ''
    };
  }

  render() {
    console.log("Rendering <Chatbar/>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser}/>
        <input
          value={this.state.messageText}
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          />
      </footer>
    );
  }
}

export default Chatbar;
