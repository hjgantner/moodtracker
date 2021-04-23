import MoodTracker from './components/MoodTracker';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container-fluid">
        <MoodTracker/>
      </div>
    </div>
  );
}

export default App;
