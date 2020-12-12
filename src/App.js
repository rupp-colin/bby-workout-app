import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import workOuts from './config/data.js';
import WorkoutList from './Components/WorkoutList.js';
import './App.css';

import Phases from './Components/Phases.js'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/phase1">
          <WorkoutList name="Phase 1" days={workOuts} />
        </Route>
        <Route path="/phase2">
          <div>
            <Link to="/">Home</Link>
            <p>coming soon...</p>
          </div>
        </Route>
        <Route path="/phase3">
          <div>
            <Link to="/">Home</Link>
            <p>coming less soon...</p>
          </div>
        </Route>
        <Route path="/" component={Phases}></Route>
      </Switch>
    </Router>
  );
}

export default App;
