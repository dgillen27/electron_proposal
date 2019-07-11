import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function VideoPage({ setCurrentPage, currentPage, config }) {

  const [video, setVideo] = useState(false);
  const slideDown = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: 300, from: {transform: 'translate3d(0%, -150%, 0)'}})
  const slideDown1 = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: 300, from: {transform: 'translate3d(0%, -150%, 0)'}})
  const slideDown2 = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: 300, from: {transform: 'translate3d(0%, -150%, 0)'}})
  const opacityChange = useSpring({opacity: 1, delay: 300, from: {opacity: 0}})
  const slideRight = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: 300, from: {transform: 'translate3d(-200%, 0, 0)'}})
  const slideUp = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: 300, from: {transform: 'translate3d(0%, 150%, 0)'}})
  const slideLeft = useSpring({onRest: () => setVideo(true), delay: 300, transform: 'translate3d(0%, 0, 0)', from: {transform: 'translate3d(200%, 0, 0)'}})
  const slideLeft1 = useSpring({onRest: () => setVideo(true), delay: 350, transform: 'translate3d(0%, 0, 0)', from: {transform: 'translate3d(250%, 0, 0)'}})
  console.log("video page is rendering");
  console.log(currentPage);
  return (
    <animated.div className="component"
      id={currentPage === "video" ? "visible" : "not-visible"}
      style={currentPage === "video" ? "show" : slideLeft1}>
      <div className="video-page"
        id={currentPage === "video" ? "visible" : "not-visible"}>
        <animated.a style={slideDown2} onClick={() => setCurrentPage('main')} className="fixed-link" to='/'>No more videos</animated.a>
        <animated.div style={opacityChange} className="blue-square"></animated.div>
        <animated.div style={slideDown} className="vertical-one"></animated.div>
        <animated.div style={slideRight} className="horizontal-one"></animated.div>
        <animated.div style={slideUp} className="vertical-two"></animated.div>
        <animated.div style={slideLeft} className="horizontal-two"></animated.div>
        { video && <iframe className="video" width="1050" height="525" src="https://www.youtube.com/embed/CSSNP2DudNw?autoplay=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
      </div>
    </animated.div>
  )
}

export default VideoPage;
