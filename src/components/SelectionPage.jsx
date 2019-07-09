import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom';


function SelectionPage(){
  const slideUp = useSpring({opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 700, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp1 = useSpring({opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 720, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp2 = useSpring({opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 740, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})
  const slideUp3 = useSpring({opacity: 1, transform: 'translate3d(0%, 25%, 0)', delay: 760, from: {opacity: 0, transform: 'translate3d(0%, 150%, 0)'}})

  return(
    <div className='boxHolder'>
      <Link to='/vid/'><animated.div className='box' style={slideUp}/></Link>
      <Link to='/vid/'><animated.div className='box' style={slideUp1}/></Link>
      <Link to='/vid/'><animated.div className='box' style={slideUp2}/></Link>
      <Link to='/vid/'><animated.div className='box' style={slideUp3}/></Link>
    </div>

  )
}

export default SelectionPage;
