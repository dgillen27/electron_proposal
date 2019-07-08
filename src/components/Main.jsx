import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <div className="text-wrapper">
        <Link to='/vid/'>Go To Videos</Link>
      </div>
    </div>
  )
}

export default Main;
