import React from 'react';
import { Link } from 'react-router-dom';

const Phases = () => {

  return (
    <>
      <div>
        <Link to="/phase1">Phase 1</Link>
      </div>
      <div>
        <Link to="/phase2">Phase 2</Link>
      </div>
      <div>
        <Link to="/phase3">Phase 3</Link>
      </div>
    </>
  )
}

export default Phases;
