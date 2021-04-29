import React, { Component } from 'react';
import Emotion from  './Emotion';
import Notes from  './Notes';
import '../css/MoodTracker.css';



class MoodTracker extends Component {


    render() {
        console.log(this.props);
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
                <div>
                    <Notes
                        submitEmotions={this.props.submitEmotions}
                    />
                </div>
            </div>


        );
    }

};

export default MoodTracker;