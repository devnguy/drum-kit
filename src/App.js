import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }
  handleKeyUp(e) {
    const sound = new Audio('/sounds/' + e.keyCode + '.wav')
    const keyPressed = document.getElementById(e.keyCode);

    if (
      e.keyCode === 65 ||
      e.keyCode === 83 ||
      e.keyCode === 68 ||
      e.keyCode === 70 ||
      e.keyCode === 74 ||
      e.keyCode === 75 ||
      e.keyCode === 76 ||
      e.keyCode === 186 
      ) {
      sound.play();
      keyPressed.classList.add('playing');
      setTimeout(() => {
        keyPressed.classList.remove('playing');
      }, 100);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="keyboardKey" id="65">a</div>
        <div className="keyboardKey" id="83">s</div>
        <div className="keyboardKey" id="68">d</div>
        <div className="keyboardKey" id="70">f</div>
        <div className="keyboardKey" id="74">j</div>
        <div className="keyboardKey" id="75">k</div>
        <div className="keyboardKey" id="76">l</div>
        <div className="keyboardKey" id="186">;</div>
      </div>
    );
  }
}

export default App;