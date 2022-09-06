import React, { useEffect, useState } from 'react'
import './BoardTile.css'
import HintPegs from './HintPegs'


function BoardTile({ guess, currentColor, setTurn, turn, answerKey, modal }) {
  const [guessCircles, setGuessCircles] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  })
  const [hintPegKey, setHintPegKey] = useState([])

  const equals = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  const handleOnClick = (e) => {
    if(!modal){
      e.target.style.backgroundColor = currentColor
      let index = parseInt(e.target.id, 10) - 1
      setGuessCircles({...guessCircles, [index]: e.target.style.backgroundColor})
    }
  }

  // console.log(guessCircles)
  // console.log(answerKey)

  const handleHintPegs = (attemptObj, answerObj) => {
    let guessEntryArray = Object.entries(attemptObj)
    let answerEntryArray = Object.entries(answerObj)


    let rightSpot = 0
    let wrongSpot = 0
    let updatedguessArray = []
    let updatedanswerArray= [...answerEntryArray]

    for(const ele of guessEntryArray){
      // console.log(ele)
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
        console.log(index)
        updatedanswerArray.splice(index, 1)
      }
      
    }



   return [rightSpot, wrongSpot]
    
    
  }


  const handleCheckClick = () => {
    if(equals(guessCircles, answerKey)){
      alert("you win")
      setTurn(1)
      setGuessCircles({
        0: "",
        1: "",
        2: "",
        3: "",
      })
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
      <h3>{guess}</h3>
      { turn >= guess ?
      <>
        <div onClick = {handleOnClick} className="guess-circle" id="1"></div>
        <div onClick = {handleOnClick} className="guess-circle" id="2"></div>
        <div onClick = {handleOnClick} className="guess-circle" id="3"></div>
        <div onClick = {handleOnClick} className="guess-circle" id="4"></div>
      </>
      : null}
      {turn === guess ? <button onClick={handleCheckClick}>check</button> : null}
      {turn > guess ?
      <HintPegs hintPegKey={hintPegKey} />
      : null}
    </div>
  )
}

export default BoardTile