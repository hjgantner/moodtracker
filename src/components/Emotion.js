import React from 'react';

function Emotion ({ emotion, changeMood }) {
    return (
        <button
            id={emotion.name}
            className={'btn-' + (emotion.name)}
            onClick={e => changeMood(e.target.innerHTML)}
        >
            {emotion.name}
        </button>
    );
};

export default Emotion;