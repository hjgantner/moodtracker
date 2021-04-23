import React, { Component } from 'react';

class MoodTracker extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            mood: "",
            notes: "",
            inserted: ""
        };
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

    changeMood = event => {
        const field = event.target.id;
        console.log(event.target.value);

        this.setState({mood: event.target.value});
        console.log(this.state);
        return;
    }

    render() {
        return (
            <div>
                <h1>What's goin on baby?</h1>

                <div>
                    <button id="happy" value="happy" className="button button5" onClick={this.changeMood.bind(this)}>Happy</button>
                    <button id="bad" value="bad" className="button button5" onClick={this.changeMood.bind(this)}>Bad</button>
                    <button id="angry" value="angry" className="button button5" onClick={this.changeMood.bind(this)}>Angry</button>
                    <button id="disgusted" value="disgusted" className="button button5" onClick={this.changeMood.bind(this)}>Disgusted</button>
                    <button id="sad" value="sad" className="button button5" onClick={this.changeMood.bind(this)}>Sad</button>
                    <button id="surprised" value="surprised" className="button button5" onClick={this.changeMood.bind(this)}>Surprised</button>
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