import React, { Component } from 'react';
import '../css/MoodTracker.css';


function Emotion ({ emotion, changeMood }) {
    return (
        <button
            id={emotion.name}
            className={'btn-' + (emotion.name)}
            onClick={e => changeMood(emotion.name)}
        >
            {emotion.name}
        </button>
    );
};

export default Emotion;

