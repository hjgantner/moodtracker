import React from 'react';

function Emotion ({ emotion, changeMood }) {
    return (
        <button
            id={emotion.name}
            className={'btn-' + (emotion.name)}
            onClick={e => changeMood(emotion.name, emotion.color)}
        >
            {emotion.name}
        </button>
    );
};

export default Emotion;