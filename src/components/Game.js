import React, { useState, useEffect } from 'react'
import Board from './Board.js'
import Panel from './Panel.js'
import Modal from './Modal.js'
import './Game.css'

function Game() {
    const easy = ['rgb(235, 214, 70)', 'rgb(59, 237, 156)', 'rgb(96, 70, 235)', 'rgb(235, 95, 72)']
    const medium = [...easy, rgb(74, 116, 255)]
    const hard = [...medium, rgb(77, 79, 79)]

    const [currentColor, setCurrentColor] = useState('#EBD646')
    const [level, setLevel] = useState(easy)
    const [answerKey, setAnswerKey] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
    })
    const [turn, setTurn] = useState(1)
    const [modalInfo, setModalInfo] = useState({
        title: "",
        text: "",
        button: ""
    })
    const [modal, setModel] = useState(false)

    useEffect(() => {
        const keys = Object.keys(answerKey)
        const obj = {}
        keys.forEach((key) => {
            let randomNumber = Math.floor(Math.random() * level.length)
            obj[key] = level[randomNumber]
        });

        setAnswerKey(obj)
    }, [level])

    const startingGuessCircles = document.querySelectorAll('.guess-circle')

    const handleNewGame = () => {
        setModel(false)
        setTurn(1)
        const keys = Object.keys(answerKey)
        const obj = {}
        keys.forEach((key) => {
            let randomNumber = Math.floor(Math.random() * level.length)
            obj[key] = level[randomNumber]
        });
        setAnswerKey(obj)
        startingGuessCircles.forEach(circle => {
            circle.style.backgroundColor = 'white'
        })

    }

    const handleWin = (title, text, button) => {
        setModel(true)
        setModalInfo({
            title: title,
            text: text,
            button: button
        })
    }

    const HandleNewGameButton = (title, text, button, secondButton) => {
        setModel(true)
        setModalInfo({
            title: title,
            text: text,
            button: button,
            secondButton: secondButton
        })
    } 

  return (
    <div className='Game'>
        <Modal modalInfo={modalInfo} modal={modal} handleNewGame={handleNewGame}/>
        <Board currentColor={currentColor} turn={turn} setTurn={setTurn} answerKey={answerKey} modal={modal} handleWin={handleWin}/>
        <Panel setCurrentColor={setCurrentColor} level={level} modal={modal} HandleNewGameButton={HandleNewGameButton}/>
    </div>
  )
}

export default Game