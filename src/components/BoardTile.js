import React, { useState } from 'react'
import './BoardTile.css'
import HintPegs from './HintPegs'
import GuessCircle from './GuessCircle'
import { render } from '@testing-library/react'


function BoardTile({ guess, currentColor, setTurn, turn, answerKey, modal, handleWin }) {
  const [guessCircles, setGuessCircles] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  })
  const [hintPegKey, setHintPegKey] = useState([])

  // console.log(turn)
  // console.log(guess)
  
  const equals = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  const handleOnClick = (e) => {
    if(!modal){
      e.target.classList.remove('plain-circle')
      e.target.classList.add('guess-circle')
      e.target.style.backgroundColor = currentColor
      let index = parseInt(e.target.id, 10) - 1
      setGuessCircles({...guessCircles, [index]: e.target.style.backgroundColor})
    }
    console.log(e.target.classList)
  }

  const handleHintPegs = (attemptObj, answerObj) => {
    let guessEntryArray = Object.entries(attemptObj)
    let answerEntryArray = Object.entries(answerObj)


    let rightSpot = 0
    let wrongSpot = 0
    let updatedguessArray = []
    let updatedanswerArray= [...answerEntryArray]

    for(const ele of guessEntryArray){
      let match = answerEntryArray.find(element => (element[0] === ele[0]) && (element[1] === ele[1]))

      if(match){
        rightSpot += 1
        let index = updatedanswerArray.indexOf(match)
        updatedanswerArray.splice(index, 1)
      } else {
        updatedguessArray.push(ele)
      }
    }

    for(const ele of updatedguessArray){
      let semiMatch = updatedanswerArray.find(element => (element[1] === ele[1]))
      if(semiMatch){
        wrongSpot += 1
        let index = updatedanswerArray.indexOf(semiMatch)
        updatedanswerArray.splice(index, 1)
      } 
    }
   return [rightSpot, wrongSpot] 
  }
  


  const renderGuessCircles = [...Array(4)].map((guessCircle, i) => {
    return <GuessCircle key={i} handleOnClick={handleOnClick} modal={modal} id={i + 1} guess={guess} turn={turn} />
  })



  const handleCheckClick = () => {
    if(equals(guessCircles, answerKey)){
      handleWin('YOU WON', `Congrats! You guessed in ${turn} turns. Click START to play again`, 'START')
      // alert("you win")
      // setTurn(1)
      // setGuessCircles({
      //   0: "",
      //   1: "",
      //   2: "",
      //   3: "",
      // })
    } else if(Object.values(guessCircles).includes("")) {
      alert('all circles must be filled!')
    } else {
      setHintPegKey(handleHintPegs(guessCircles, answerKey))
      setTurn(turn += 1)
      setGuessCircles({
        0: "",
        1: "",
        2: "",
        3: "",
      })
    }
    
  }

  






  
  return (
    <div className="BoardTile">
      <h3 className='guess-number'>{guess}.</h3>
      { turn >= guess ? renderGuessCircles : null}
      {turn === guess ? <button id='check-button' onClick={handleCheckClick}>CHECK</button> : null}
      {turn > guess ?
      <HintPegs hintPegKey={hintPegKey} />
      : null}
    </div>
  )
}

export default BoardTile

{/* <div onClick = {handleOnClick} className={ !modal ? "guess-circle" : "guess-circle-modal"}  id="1"></div>
        <div onClick = {handleOnClick} className="guess-circle" id="2"></div>
        <div onClick = {handleOnClick} className="guess-circle" id="3"></div>
        <div onClick = {handleOnClick} className="guess-circle" id="4"></div> */}