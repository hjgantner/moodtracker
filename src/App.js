import MoodTracker from './components/MoodTracker';
import NavBar from './components/NavBar';
import Timeline from './components/Timeline';
import { React, Component } from 'react';


const emotions = [
  {
      name: "happy",
      color: "#008000"
  },
  {
      name: "bad",
      color: "#0c0c0c"
  },
  {
      name: "angry",
      color: "#fa0000"
  },
  {
      name: "disgusted",
      color: "#7bad1c"
  },
  {
      name: "sad",
      color: "#020080"
  },
  {
      name: "surprised",
      color: "#ff00c8"
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
        color: "",
        notes: "",
        insertedAt: "",
        showTimeline: false,
        history: []
    };

    this.changeMood = this.changeMood.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.submitEmotion = this.submitEmotion.bind(this);

  }


  changeMood (emotion, color) {
    this.setState({
      mood: emotion,
      color: color
    });
    return;
  }

  setUsername (username) {
    this.setState({username: username}, () => {
      //this callback function ensures state is updated before
      // printing it to the console
    });
    return;
  }

  //after emotion, username, and possibly notes are set, 
  // store that information along with a date stamp.
  submitEmotion (notes) {
    console.log(notes);
    if(notes) {
      this.setState({notes: notes});
    }
    var insertStamp = new Date();
    this.setState({insertedAt: insertStamp}, async () => {
      const response = await fetch(`http://localhost:8080/${this.state.username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      });
      //const userHistory = await response.json();
      this.setState({showTimeline : true});
      await this.getHistory();
    });
    return;
  }

  async getHistory () {
    var response = await fetch(`http://localhost:8080/${this.state.username}`);
    const userHistory = await response.json();
    console.log(userHistory);
    this.setState({history : userHistory});
  }
  
  render() {
    const showHistory = this.state.showTimeline;
    let display;
    if(showHistory) {
      var historyToDisplay = this.state.history;
      console.log("calling timeline: ", historyToDisplay);
      display = <Timeline history={historyToDisplay}/>
    } else {
      display = "No history";
    }
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
          {display}
        </div>
      </div>
    );
  }

}

export default App;
