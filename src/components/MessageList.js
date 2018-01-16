import React, {Component} from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import Message from './Message'

class MessageList extends Component {
  constructor () {
    super()
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
  render () {
    return (
      <div className="App-messages">
        <ul>
          {this.state.messages.map(message => <Message {...message} />)}
        </ul>
      </div>
    )
  }
}

export default MessageList
