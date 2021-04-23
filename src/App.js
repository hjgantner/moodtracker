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
        inserted: ""
    };

    this.changeMood = this.changeMood.bind(this);
  }


  changeMood (emotion) {

    this.setState({mood: emotion});
    return;
  }
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="container-fluid">
          <MoodTracker
            moods={emotions}
            changeMood={this.changeMood}
            mood={this.state.mood}
          />
        </div>
      </div>
    );
  }

}

export default App;
