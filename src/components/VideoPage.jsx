import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VideoPage({ content }) {

  const [video, setVideo] = useState(false);

  useEffect(() => {
    setTimeout(function(){ setVideo(true) }, 3000);
  });

  return (
    <div className="video-page">
      {/*<Link to='/'>No more videos</Link>*/}
      <div className="blue-square"></div>
      <div className="vertical-one"></div>
      <div className="horizontal-one"></div>
      <div className="vertical-two"></div>
      <div className="horizontal-two"></div>
      { video && <iframe className="video" width="1050" height="525" src="https://www.youtube.com/embed/CSSNP2DudNw?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
    </div>
  )
}

export default VideoPage;
