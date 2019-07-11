import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import { Link } from 'react-router-dom';


function SelectionPage({ setCurrentPage, currentPage }){
  const slideUp = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 300, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp1 = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 320, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp2 = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 340, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp3 = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 360, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp4 = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 300, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideOff = useSpring({config: config.gentle, transform: 'translate3d(0%, 200%, 0)', delay: 300, from: { transform: 'translate3d(0%, 0%, 0)'}})


  return(
    <animated.div
      className="component"
      id={currentPage === "selection" ? "visible" : "invisible"}
      style={currentPage === "selection" ? "show" : slideOff}>
      <animated.h1 style={slideUp4}>Select a Video</animated.h1>
      <div className='boxHolder'>
        <a onClick={() => setCurrentPage('video')}><animated.div className='box' style={slideUp}/></a>
        <a onClick={() => setCurrentPage('video')}><animated.div className='box' style={slideUp1}/></a>
        <a onClick={() => setCurrentPage('video')}><animated.div className='box' style={slideUp2}/></a>
        <a onClick={() => setCurrentPage('video')}><animated.div className='box' style={slideUp3}/></a>
      </div>
    </animated.div>

  )
}

export default SelectionPage;
