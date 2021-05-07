import React from 'react';
import '../css/MoodTracker.css';
import styled from 'styled-components'

const CircleButton = styled.button`
    width: 75px;
    height: 75px;
    /* padding: 10px 16px; */
    border-radius: 45px;
    font-size: 12px;
    text-align: center;
    margin-right: 15px;
    margin-top: 15px;
    border: none;
    transition-duration: 0.5s;
    background-color: ${props => 
        props.color
    };
    color: ${props => 
        props.color
    };

    &:hover {
        background-color: white;
    }
    &:focus {
        background-color: white;
    }
    &:active {
        background-color: ${props => 
            props.color
        }; 
    }


`;

function Emotion ({ emotion, changeMood }) {

    //TODO:
    //write function that sets the selected emotion's button 
    // to a select state (white background, text showing.)
    // This could also set the submit button to the color of the emotion

    function setSelectedEmotion(e) {
        console.log("setSelectedEmotion: ", e, "\nemotion: ", emotion);
    }
    
    return (
        
        <div className="d-inline-flex">
            <div className="d-flex text-center flex-column">
                
            
                <CircleButton
                    emotion={emotion.name}
                    color={emotion.color}
                    // className="btn-flip"
                    onClick={e => {
                        setSelectedEmotion(e);
                        changeMood(emotion.name, emotion.color);
                    }
                    }
                >
                    {emotion.name}
                </CircleButton>
            </div>
        </div>

    );
};

export default Emotion;