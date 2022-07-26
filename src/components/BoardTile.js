import React, { useEffect, useState } from 'react'
import './BoardTile.css'
import HintPegs from './HintPegs'

function BoardTile({ guess, currentColor, setTurn, turn, answerKey }) {
  const [guessCircles, setGuessCircles] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  })

  const equals = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  const handleOnClick = (e) => {
    e.target.style.backgroundColor = currentColor
    let index = parseInt(e.target.id, 10) - 1

    setGuessCircles({...guessCircles, [index]: e.target.style.backgroundColor})
  }

  // console.log(guessCircles)
  // console.log(answerKey)

  const handleHintPegs = (attemptObj, answerObj) => {
    let guessEntryArray = Object.entries(attemptObj)
    let answerEntryArray = Object.entries(answerObj)

    console.log(guessEntryArray)
    console.log(answerEntryArray)

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

    console.log(updatedguessArray)
    console.log(updatedanswerArray)
    console.log(`right: ${rightSpot}`)
    console.log(`wrong: ${wrongSpot}`)


    for(const ele of updatedguessArray){
      let semiMatch = updatedanswerArray.find(element => (element[1] === ele[1]))
      if(semiMatch){
        wrongSpot += 1
        let index = updatedanswerArray.indexOf(semiMatch)
        console.log(index)
        updatedanswerArray.splice(index, 1)
      }
      console.log(semiMatch)
      
    }




    // for(let i = updatedguessArray.length - 1; i >= 0; i--){
    //   let semiMatch = updatedanswerArray.find(element => (element[1] === updatedguessArray[i][1]))
    //   if(semiMatch){
    //     wrongSpot += 1
    //     let index = updatedguessArray.indexOf(semiMatch)
    //     updatedanswerArray.splice(index, 1)
    //     updatedguessArray.splice(i, 1)
    //   } else {
    //     console.log('nope')
    //   }
    // }

    // console.log(answerEntryArray)
    // console.log(updatedguessArray)
    // console.log(`right: ${rightSpot}`)
    // console.log(`wrong: ${wrongSpot}`)

    // for(const ele of updatedguessArray){
    //   let semiMatch = answerEntryArray.find(element => (element[1] === ele[1]))
    //   if(semiMatch){
    //     wrongSpot += 1
    //   } else {
    //     console.log('nope')
    //   }
    // }

  
    // console.log(guessEntryArray)

   return [rightSpot, wrongSpot]
    
    
  }


  const handleCheckClick = (e) => {
    if(equals(guessCircles, answerKey)){
      alert("you win")
    } else {
      console.log(handleHintPegs(guessCircles, answerKey))
    }
    if(Object.values(guessCircles).includes("")){
      alert('all circles must be filled!')
    } else {
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
      <HintPegs />
      : null}
    </div>
  )
}

export default BoardTile