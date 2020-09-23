import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField';
import Message from './components/Message';
import {v4 as uuidv4} from "uuid";

class MessageComponent extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: 'Bot',
        message: 'Я бот, чего ты от меня хочешь, кожаный мешок?'
      },
    ],
  };

  componentDidUpdate(prevProps ,prevState) {
    const {messages} = this.state;
    if (messages[messages.length - 1].author !== "Bot") {
      setTimeout(() => {
        this.addMessage({ author: "Bot", message: "Привет! Я бот"})
      }, 1000);
    }
  }


  addMessage = (message) => {
    const { messages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  render = () => {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map(({ id, author, message }) => (
            <Message key={id} author={author} message={message} />
          ))}
        </ul>
        <MessageField addMessage={this.addMessage} />
      </div>
    );
  }
}

ReactDOM.render(
  <MessageComponent/>,
  document.getElementById('root'),
);