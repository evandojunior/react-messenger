import React, { Component } from 'react';
import MessageList from './MessageList'
import MessageBox from './MessageBox'

class Content extends Component {
  render() {
    return (
        <div className="App-content">
          <MessageBox />
          <MessageList />
        </div>
    );
  }
}

export default Content;
