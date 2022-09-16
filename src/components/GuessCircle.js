import React from 'react'
import './GuessCircle.css'

function GuessCircle({handleOnClick, id}) {
  return (
    <div onClick={handleOnClick} id={id} className='plain-circle'></div>
  )
}

export default GuessCircle
