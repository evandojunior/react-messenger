import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import MessageList from './MessageList'

class Content extends Component {
  render() {
    return (
        <div className="App-content">
          <MessageList />
        </div>
    );
  }
}

export default Content;
