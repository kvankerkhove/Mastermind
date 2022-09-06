import React from 'react'
import './GuessCircle.css'

function GuessCircle({handleOnClick, modal, id}) {

  return (
    <div onClick={handleOnClick} id={id} className={ !modal ? "guess-circle" : "guess-circle-modal"}></div>
  )
}

export default GuessCircle