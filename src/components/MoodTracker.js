import React, { Component } from 'react';
import Emotion from  './Emotion';
import '../css/MoodTracker.css';

const emotions = [
    {
        name: "happy"
    },
    {
        name: "bad"
    },
    {
        name: "angry"
    },
    {
        name: "disgusted"
    },
    {
        name: "sad"
    },
    {
        name: "surprised"
    },
]

class MoodTracker extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            mood: "",
            notes: "",
            inserted: ""
        };

        this.changeMood = this.changeMood.bind(this);
    }

    //Moods:
    //Fearful: Gray
    //Angry: Red
    //Disgusted: Black
    //Sad: Blue
    //Happy: Violet (yellow?)
    //Relaxed: purple

    //createn 6 buttons each with a color. 
    //On click, save that into the db

    //to display, sort the day in cronological order and display the colors
    //onclick, show notes from that moment

    changeMood (emotion) {

        this.setState({mood: emotion});
        return;
    }


    render() {
        return (
            <div className="jumbotron">
                <h1>What's goin on baby?</h1>

                <div>
                    {emotions.map(emotion => (
                        <Emotion 
                            emotion={emotion}
                            changeMood={this.changeMood}
                        />
                    ))}
                    {/* <button id="happy" value="happy" className="btn-happy" onClick={this.changeMood.bind(this)} block>Happy</button>{' '}
                    <button id="bad" value="bad" className="btn-bad" onClick={this.changeMood.bind(this)} block>Bad</button>{' '}
                    <button id="angry" value="angry" className="btn-danger" onClick={this.changeMood.bind(this)} block>Angry</button>{' '}
                    <button id="disgusted" value="disgusted" className="btn-disgusted" onClick={this.changeMood.bind(this)} block>Disgusted</button>{' '}
                    <button id="sad" value="sad" className="btn-sad" onClick={this.changeMood.bind(this)} block>Sad</button>{' '}
                    <button id="surprised" value="surprised" className="btn-surprised" onClick={this.changeMood.bind(this)} block>Surprised</button>{' '} */}
                </div>
                <div>
                    {this.state.mood !== "" ? 
                        <h2>I'm feeling {this.state.mood}</h2>
                        : null }
                </div>
            </div>


        );
    }

};

export default MoodTracker;