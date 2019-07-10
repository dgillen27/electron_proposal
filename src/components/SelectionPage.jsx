import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import { Link } from 'react-router-dom';


function SelectionPage(){
  const slideUp = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 700, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp1 = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 720, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp2 = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 740, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp3 = useSpring({config: config.gentle, opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 760, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})

  return(
    <div style={{height:'100%', width:'100%'}}>
      <h1>Select a Video</h1>
      <div className='boxHolder'>
        <Link to='/vid/'><animated.div className='box' style={slideUp}/></Link>
        <Link to='/vid/'><animated.div className='box' style={slideUp1}/></Link>
        <Link to='/vid/'><animated.div className='box' style={slideUp2}/></Link>
        <Link to='/vid/'><animated.div className='box' style={slideUp3}/></Link>
      </div>
    </div>

  )
}

export default SelectionPage;
