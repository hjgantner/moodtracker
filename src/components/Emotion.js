import React from 'react';

function Emotion ({ emotion, changeMood }) {
    return (
        <button
            id={emotion.name}
            style={{backgroundColor: emotion.color}}
            onClick={e => changeMood(emotion.name, emotion.color)}
        >
            {emotion.name}
        </button>
    );
};

export default Emotion;