import React, {Component} from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          title: "Primeira Mensagem",
          author: "Evando Junior"
        }, {
          id: 2,
          title: "Segunda Mensagem",
          author: "Evando Junior"
        }, {
          id: 3,
          title: "Terceira Mensagem",
          author: "Evando Junior"
        }
      ]
    }
  }
  render() {
    const messages = this.state.messages.map((message) => <li>{message.title} by {message.author}</li>);
    return (<div className="App-messages">
      <ul>
        {messages}
      </ul>
    </div>);
  }
}

export default MessageList;
