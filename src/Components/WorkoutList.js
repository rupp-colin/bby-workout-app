import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = (props) => {

  return (
    <div>
      <Link to='/'>Home</Link>
      <h2>{props.name}</h2>
      <p>list the phase one promgram here</p>
      <ul>
        {
          props.days.map(x => {
            return (
              <li key={`day-${x.day}-${x.type}`}>
                <Link to={`workout/phase1/${x.day}`}>Day {x.day}: {x.type}</Link>
              </li>
            )
            })
          }
        </ul>
      </div>
    )
    };

    export default WorkoutList;
