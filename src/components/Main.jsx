import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  console.log("Title is rendering");
  return (
    <div>
      <div className="text-wrapper">
        <Link to='/select/'>Go To Selection</Link>
      </div>
    </div>
  )
}

export default Main;
