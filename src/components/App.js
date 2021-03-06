import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
