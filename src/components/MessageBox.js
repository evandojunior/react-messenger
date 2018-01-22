import React, {Component} from 'react';
class MessageBox extends Component {

  render() {
    return (
      <div>
        <textarea id="message"></textarea>
        <button class="btn btn-primary">Send Message</button>
      </div>
    );
  }
}

export default MessageBox;
