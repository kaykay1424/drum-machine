import React from 'react';

import {audioClips} from './audioClips.js';

// Components
import DrumPad from './DrumPad';
import DrumControls from './DrumControls';

class DrumMachine extends React.Component {
  state = {
      audioText: '',
      isClicked: false,
      padIsPressed: false,
      pressedPad: '',
      volume: 20,
      active: true
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  changeAudioText = (audioText) => {
    this.setState({
      audioText
    })
  }

  changePower = (status) => {
    this.setState({
      active: status,
      isClicked: true
    })
    let state = this;
    setTimeout(function() {
      state.setState({
        isClicked: false
      })
    },100);
  }

  changeVolume =  (volume) => {
    this.setState({
      volume
    })
  }
  
  handleKeyDown = (e) => {
    let key = e.key.toUpperCase();
    this.playAudio(key);
  }

  handleKeyUp = (e) => {
    let key = e.key.toUpperCase();
    this.stopAudio(key);
  }

  playAudio = (key) => {
    if (this.state.active) {
      if (Object.keys(audioClips[0]).includes(key)) {
        let audio = new Audio(audioClips[0][key].soundClip); 
        audio.volume = this.state.volume / 100;        
        audio.play();
        this.setState({
          pressedPad: key,
          padIsPressed: true,
          audioText: audioClips[0][key].soundText
        }); 
      } 
    }
  }

  stopAudio = (key) => {
    if (this.state.active) {
      if (Object.keys(audioClips[0]).includes(key)) {
        this.setState({
          padIsPressed: false,
          pressedPad: ''
        })
      }
    }
  }

  render() {
    return (
      <div className="main-container">
        <div 
          id="drum-machine" 
          className="container" 
        >
        <div className="drum-pads">
            {Object.keys(audioClips[0]).map((letter,i) => {
                return (
                  <DrumPad 
                    key={i} 
                    padIsPressed={this.state.padIsPressed}  
                    pressedPad={this.state.pressedPad} 
                    playAudio={this.playAudio} 
                    stopAudio={this.stopAudio}
                    letter={letter}   
                  />
                );    
            })}
        </div>
        <DrumControls 
          audioText={this.state.audioText} 
          active={this.state.active} 
          isClicked={this.state.isClicked}
          changeAudioText={this.changeAudioText} 
          changePower={this.changePower} 
          changeVolume={this.changeVolume}
          volume={this.state.volume}
        />
        </div>
      </div>      
    );
  }
}
    
export default DrumMachine;