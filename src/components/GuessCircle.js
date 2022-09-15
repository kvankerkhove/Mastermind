import React from 'react'
import './GuessCircle.css'

function GuessCircle({handleOnClick, modal, id, guess, turn}) {
  // console.log(guess)
  console.log(turn)
  // const guessCircleId = document.getElementById(`${id}`)


  // if(guess === turn){
  //   guessCircleId.classList.add('plain-circle')
  //   guessCircleId.classList.remove('guess-circle')
  // }
    // guessCircleId.classList.remove('plain-circle')

  return (
    <div onClick={handleOnClick} id={id} className={ !modal ? "plain-circle" : "guess-circle-modal"}></div>
  )
}

export default GuessCircle

// { !modal ? "guess-circle" : "guess-circle-modal"}