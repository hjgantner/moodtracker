import React, { Component } from 'react';
import Emotion from  './Emotion';
import '../css/MoodTracker.css';



class MoodTracker extends Component {


    render() {
        return (
            <div className="jumbotron">
                <h1>What's goin on baby?</h1>

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
            </div>


        );
    }

};

export default MoodTracker;