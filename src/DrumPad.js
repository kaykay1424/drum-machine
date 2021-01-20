import React from 'react';

const DrumPad = ({letter,pressedPad,padIsPressed,playAudio,stopAudio}) => {
    return ( 
        <div 
            id={`drum-pad-${letter}`}  
            className={`drum-pad ${letter === pressedPad && padIsPressed ? 'padPressed' : '' }`} 
            onMouseDown={(e) => playAudio(letter)}
            onMouseUp={(e) => stopAudio(letter)}
        >
            <p id={`pad-text-${ letter}`}  >{letter}</p>
        </div>
    )
}

export default DrumPad;