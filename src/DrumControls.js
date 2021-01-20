import React from 'react';

const DrumControls = ({active,isClicked,audioText,changeAudioText,changePower,changeVolume,volume}) => {
  const controlPower = () => {
    if (active) {
        changePower(false);
        changeAudioText('');
        changeVolume(0);
    }
    else {
        changePower(true);
        changeAudioText('');
        changeVolume(20);
    }
  }

  const handleVolumeChange = (e) => {
    changeVolume(e.target.value);
  }
  
  return (
    <div className="button-controls" >
      <div id="power-box">Power</div>
      <div 
        id="power-button" 
        className={`${isClicked ? 'clicked' : ''} ${active ? 'active' : 'inactive'}`} 
        onClick={controlPower}>
      </div>
      <div id="sound-display">{audioText}</div>
      <div className="volume-container">
        <img
          className="speaker" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/2000px-Speaker_Icon.svg.png" 
          alt="speaker"
        />
        <span id="volume" >{volume}</span>
      </div>
      <input 
        id="volume-bar" 
        className={!active ? 'disabled' : ''} 
        type="range" 
        onChange={handleVolumeChange} 
        min="0" 
        max="100" 
        value={volume} 
        disabled={!active} 
      />
    </div>
  )
}

export default DrumControls;