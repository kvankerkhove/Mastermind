import React, { useState, useEffect } from 'react'
import Board from './Board.js'
import Panel from './Panel.js'
import Modal from './Modal.js'
import './Game.css'

function Game() {
    const easy = ['rgb(235, 214, 70)', 'rgb(59, 237, 156)', 'rgb(96, 70, 235)', 'rgb(235, 95, 72)']
    const medium = [...easy, 'rgb(74, 116, 255)']
    const hard = [...medium, 'rgb(77, 79, 79)']

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
    const [modal, setModal] = useState(false)

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
        setModal(false)
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
        setModal(true)
        setModalInfo({
            title: title,
            text: text,
            button: button
        })
    }

    const handleNewGameButton = (title, text, button, secondButton) => {
        setModal(true)
        setModalInfo({
            title: title,
            text: text,
            button: button,
            secondButton: secondButton
        })
    } 

    const handleCloseModal = () => {
        setModal(false)
    }

  return (
    <div className='Game'>
        <Modal modalInfo={modalInfo} modal={modal} handleNewGame={handleNewGame} handleCloseModal={handleCloseModal}/>
        <Board currentColor={currentColor} turn={turn} setTurn={setTurn} answerKey={answerKey} modal={modal} handleWin={handleWin}/>
        <Panel setCurrentColor={setCurrentColor} level={level} modal={modal} handleNewGameButton={handleNewGameButton} currentColor={currentColor}/>
    </div>
  )
}

export default Game