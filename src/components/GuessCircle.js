import React from 'react'
import './GuessCircle.css'

function GuessCircle({handleOnClick, id}) {
  return (
    <div className='guess-circle-container'>
      <div onClick={handleOnClick} id={id} className='plain-circle'></div>
    </div>
  )
}

export default GuessCircle
