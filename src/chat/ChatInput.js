import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };
  }

  textChangeHandler = (event) => {
    this.setState({ chatInput: event.target.value });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onSend(this.state.chatInput);
    this.setState({ chatInput: '' });
  }


  render() {
    return (
      <form className="form-inline chat-input" onSubmit={this.submitHandler}>
        <input type="text"
        className="form-control"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;
