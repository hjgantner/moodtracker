import MoodTracker from './components/MoodTracker';
import NavBar from './components/NavBar';
import { React, Component } from 'react';


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

    




class App extends Component {

  constructor() {
    super();
    this.state = {
        username: "",
        mood: "",
        notes: "",
        insertedAt: ""
    };

    this.changeMood = this.changeMood.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.submitEmotion = this.submitEmotion.bind(this);

  }


  changeMood (emotion) {
    this.setState({mood: emotion});
    return;
  }

  setUsername (username) {
    this.setState({username: username}, () => {
      //this callback function ensures state is updated before
      // printing it to the console
      console.log(this.state);
    });
    return;
  }

  //after emotion, username, and possibly notes are set, 
  // store that information along with a date stamp.
  submitEmotion (notes) {
    console.log(notes);
    if(notes !== null) {
      this.setState({notes: notes});
    }
    var insertStamp = new Date();
    this.setState({insertedAt: insertStamp}, () => {
      console.log(this.state);
    });
    return;
  }
  
  render() {
    return (
      <div className="App">
        <NavBar
          setUsername={this.setUsername}
        />
        <div className="container-fluid">
          <MoodTracker
            moods={emotions}
            username={this.state.username}
            notes={this.state.notes}
            changeMood={this.changeMood}
            submitEmotions={this.submitEmotion}
            mood={this.state.mood}
          />
        </div>
      </div>
    );
  }

}

export default App;
