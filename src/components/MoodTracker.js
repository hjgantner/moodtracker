import React, { Component } from 'react';
import Emotion from  './Emotion';
import Notes from  './Notes';
import '../css/MoodTracker.css';
import { CirclePicker } from 'react-color';


class MoodTracker extends Component {


    handleChangeComplete = (color) => {

        this.setState({background : color.hex})
    };

    handleChange(color, event) {
        console.log("color: ", color);
        console.log("event: ", event);
    }
    render() {

        return (
            <div className="jumbotron">
                {this.props.username !== "" ? 
                    <h1>What's going on {this.props.username}</h1>
                    : <h1>Please enter a username</h1>
                }

                <div>
                    

                    {this.props.moods.map(mood => (
                        <Emotion 
                            emotion={mood}
                            changeMood={this.props.changeMood}
                        />
                    ))}
                   
                </div>
                <div>
                    {this.props.mood !== "" ? 
                        <h2>I'm feeling {this.props.mood}</h2>
                        : null }
                </div>
                <br/>
                {
                     <div>
                     {
                        this.props.mood ? 
                    
                            <Notes
                                submitEmotions={this.props.submitEmotions}
                            />
                        :
                        ""
                     }
                    </div>
                }
            </div>
        );
    }

};

export default MoodTracker;