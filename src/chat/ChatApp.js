import React from 'react';
import io from 'socket.io-client';
import config from '../config/config';
import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: [],
      user : JSON.parse(localStorage.getItem('user'))
    };
    this.socket = io(config.api, { query: `username=${this.state.user.fullname}` }).connect();

    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler = (message) => {
    const messageObject = {
      username: this.state.user.fullname,
      message
    };

    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage = (message) => {
    console.log(message)
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }

}

export default ChatApp;
