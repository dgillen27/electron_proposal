import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';

function Main({ currentPage, setCurrentPage}) {

  const slide = useSpring({config: { tension: 120, friction: 15 }, transform: 'translate3d(0%, 0%, 0)', delay: 300, from: { transform: 'translate3d(0%, 150%, 0)'}})
  const slideOff = useSpring({config: { tension: 120, friction: 15 }, transform: 'translate3d(0%, 200%, 0)', delay: 300, from: { transform: 'translate3d(0%, 0%, 0)'}})

  console.log("Main is rendering");
  console.log(currentPage);
  return (
    <animated.div
      className="component"
      id={currentPage === "main" || currentPage === "starter" ? "visible" : "invisible"}
      style={currentPage === "main" || currentPage === "starter" ? slide : slideOff}>
      <div className="text-wrapper">
        <a onClick={() => setCurrentPage('selection')}>Go To Selection</a>
      </div>
    </animated.div>
  )
}

export default Main;
