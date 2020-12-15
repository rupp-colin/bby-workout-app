import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const WorkPreview = (props) => {

  const [active, setActive] = useState(false);

  const { day } = useParams();
  const { type, movements } = props.data.find(item => item.day === Number(day))

  return (
    <>
      {active
      ? <h1>foobar</h1>
      : <>
      <h1>Workout {day}</h1>
      <h2>{type}</h2>
      {type !== 'rest' &&
      <>
        <button onClick={() => setActive(true)}>Start</button>
        <ul>
          {movements.map(m => {
            return (
              <li key={`day${day}-${m.name}`}>
                <h3>{m.name}: {m.sets}x{m.reps}</h3>
                <p>{m.tempo}</p>
                <p>rest: {m.rest} seconds</p>
              </li>
            )
          })}
        </ul>
      </>
    }
  </>
}
    </>
  )
}

export default WorkPreview;
