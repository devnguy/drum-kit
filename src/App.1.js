import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // };
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }
  handleKeyUp(e) {
    const aKeySound = new Audio('/sounds/tom.wav')
    const sKeySound = new Audio('/sounds/clap.wav')
    const dKeySound = new Audio('/sounds/hihat.wav')
    const fKeySound = new Audio('/sounds/kick.wav')
    const jKeySound = new Audio('/sounds/openhat.wav')
    const kKeySound = new Audio('/sounds/ride.wav')
    const lKeySound = new Audio('/sounds/snare.wav')
    const semiColonKeySound = new Audio('/sounds/tink.wav')

    console.log(e.keyCode);

    switch (e.keyCode) {
      case 65:
        aKeySound.play();
        break;
      case 83:
        sKeySound.play();
        break;
      case 68:
        dKeySound.play();
        break;
      case 70:
        fKeySound.play();
        break;
      case 74:
        jKeySound.play();
        break;
      case 75:
        kKeySound.play();
        break;
      case 76:
        lKeySound.play();
        break;
      case 186:
        semiColonKeySound.play();
        break;
    }
  }
  render() {
    return (
      <div className="keyboardKey">
        a
      </div>
    );
  }
}

export default App;


/*

set up event listeners for asdfjkl;
  listen for keyUp, then run function

function will play sound (console log in first iteration)

a65 s83 d68 f70 j74 k75 l76 ;186

*/