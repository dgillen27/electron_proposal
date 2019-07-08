import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPage from './components/VideoPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IT WORKS</h1>
        <VideoPage />
      </div>
    );
  }
}

export default App;
