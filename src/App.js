import MoodTracker from './components/MoodTracker';
import Timeline from './components/Timeline';
import { React, Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Background from './background.svg';
import './css/App.css';

const emotions = [
  {
    name: "angry",
    color: "#B81236"
  },
  {
      name: "anxious",
      color: "#E82253"
  },
  {
      name: "worried",
      color: "#AE2166"
  },
  {
      name: "sad",
      color: "#441E57"
  },
  {
      name: "melancholy",
      color: "#004185"
  },
  {
      name: "content",
      color: "#037E9F"
  },
  {
    name: "happy",
    color: "#269261"
  },
  {
    name: "elated",
    color: "#FEC81E"
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
        id: "",
        username: "",
        mood: "",
        color: "",
        notes: "",
        insertedAt: "",
        history: []
    };

    this.changeMood = this.changeMood.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.submitEmotion = this.submitEmotion.bind(this);
    this.setUpNewMood = this.setUpNewMood.bind(this);
  }


  componentDidUpdate() {
    if(this.state.username) {
      
    }
  }


  changeMood (emotion, color) {
    this.setState({
      mood: emotion,
      color: color
    });
    return;
  }

  setUpNewMood () {
    this.setState({
      id: "",
      mood: "",
      color: "",
      notes: "",
      insertedAt: "",
      showTimeline: false,
    })
  }

  setUsername (username) {
    this.setState({
      username: username,
      mood: ""
    }, () => {
      this.getHistory().then( result => {
        if(result) {
          this.setState({history : result});
        }
      });
    });

    return;
  }

  getIsoAndLocalDate () {
    var newDateNoOffset = new Date();
    var offset = newDateNoOffset.getTimezoneOffset() * 60000;

    var totalOffset = (newDateNoOffset.getTime() - offset);
    return new Date(totalOffset).toISOString();
  }

  //after emotion, username, and possibly notes are set, 
  // store that information along with a date stamp.
  submitEmotion (notes) {
    if(notes) {
      this.setState({notes: notes});
    }
    var insertStamp = this.getIsoAndLocalDate();
    console.log(insertStamp);
    this.setState({insertedAt: insertStamp}, async () => {
      const response = await fetch(`http://localhost:8080/${this.state.username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      });
      const newInsert = await response.json();
      // this.setState({showTimeline : true});
      // if(!this.state.history) {
      var updatedHistory = this.state.history.concat(newInsert);
      this.setState({
        history : updatedHistory,
        color: 'grey',
      });
    });

        
    return 

  }

  async getHistory () {
    var response = await fetch(`http://localhost:8080/${this.state.username}`);
    const userHistory = await response.json();
    return userHistory;
  }
  
  render() {

    const redirectToTimeline = this.state.insertedAt;
    
    
    return (
      <Router>
        <div className="App ">
          
          <NavBar 
           setUsername={this.setUsername}
           newMood={this.setUpNewMood}
          />
          
          {/* <div className="container-fluid fill background"> */}
          <div className="container-fluid">

            {/* <BrowserRouter> */}
              <Switch>
                <Route exact path="/">
                  {
                    redirectToTimeline ? 
                    <Redirect to="/timeline"/>
                    :
                    <MoodTracker
                      moods={emotions}
                      username={this.state.username}
                      notes={this.state.notes}
                      changeMood={this.changeMood}
                      submitEmotions={this.submitEmotion}
                      mood={this.state.mood}
                      color={this.state.color}
                      setUsername={this.setUsername}
                    />
                  }
                </Route>
                <Route path="/timeline">
                  <Timeline 
                    history={this.state.history}
                    userName={this.state.username}
                  />
                </Route>
              </Switch>
            {/* </BrowserRouter> */}
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
