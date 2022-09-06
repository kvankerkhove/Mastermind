import React, { useState, useEffect } from 'react'
import Board from './Board.js'
import Panel from './Panel.js'
import Modal from './Modal.js'
import './Game.css'

function Game() {
    const easy = ['rgb(235, 214, 70)', 'rgb(59, 237, 156)', 'rgb(96, 70, 235)', 'rgb(235, 95, 72)']
    // const medium = [...easy, '#4A74FF']
    // const hard = [...medium, '#4D4F4F']

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
    const [modal, setModel] = useState(true)

    
    useEffect(() => {
        const keys = Object.keys(answerKey)
        const obj = {}
        keys.forEach((key) => {
            // `${key}: ${level[randomNumber]}`
            let randomNumber = Math.floor(Math.random() * level.length)
            obj[key] = level[randomNumber]
        });

        setAnswerKey(obj)
    }, [level])


    // console.log(answerKey)

  return (
    <div className='Game'>
        <Modal modalInfo={modalInfo} modal={modal}/>
        <Board currentColor={currentColor} turn={turn} setTurn={setTurn} answerKey={answerKey} modal={modal}/>
        <Panel setCurrentColor={setCurrentColor} level={level} modal={modal}/>
    </div>
  )
}

export default Game