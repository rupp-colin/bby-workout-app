import { useState } from 'react';
import logo from './logo.svg';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
import workOuts from './config/data.js';
import WorkoutList from './Components/WorkoutList.js';
import WorkPreview from './Components/WorkPreview.js';
import './App.css';

import Phases from './Components/Phases.js'

function App() {

  const [ day, setDay ] = useState(0);

  const getDay = (day) => {
    setDay(day)
  }

  return (
      <Switch>
        <Route exact path="/phase1">
          <WorkoutList name="Phase 1" days={workOuts} getDay={getDay} />
        </Route>
        <Route path={`/workout/phase1/:day`} >
          <WorkPreview data={workOuts}/>
        </Route>
        <Route exact path="/phase2">
          <div>
            <Link to="/">Home</Link>
            <p>coming soon...</p>
          </div>
        </Route>
        <Route exact path="/phase3">
          <div>
            <Link to="/">Home</Link>
            <p>coming less soon...</p>
          </div>
        </Route>
        <Route exact path="/" component={Phases}></Route>
      </Switch>
  );
}

export default App;
