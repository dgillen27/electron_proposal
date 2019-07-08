import React from 'react';
import { Link } from 'react-router-dom';

function VideoPage({ content }) {
  return (
    <div>
      <h1>Video page</h1>
      <Link to='/'>No more videos</Link>
    </div>
  )
}

export default VideoPage;
