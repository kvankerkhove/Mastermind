import React, {useState} from 'react'
import './Modal.css'

function Modal({modalInfo, modal, handleNewGame, handleCloseModal}) {
    const {title, text, button} = modalInfo

    if(modalInfo.answerKey){
        console.log(modalInfo.answerKey)
    }

  return (
    <>
        {modal && (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>{title}</h2>
                {modalInfo.answerKey ?
                <div id='answer-key-circles'>
                    <div className='guess-circle' style={{backgroundColor: modalInfo.answerKey[0]}}></div>
                    <div className='guess-circle' style={{backgroundColor: modalInfo.answerKey[1]}}></div>
                    <div className='guess-circle' style={{backgroundColor: modalInfo.answerKey[2]}}></div>
                    <div className='guess-circle' style={{backgroundColor: modalInfo.answerKey[3]}}></div>
                </div>
                : null}
                <p>
                    {text}
                </p>
                <button onClick={() => handleNewGame()} className="start-button-modal" >
                    {button}
                </button>
                {modalInfo.secondButton ? <button onClick={() => handleCloseModal()}className='close-button-modal'>{modalInfo.secondButton}</button> : null}
            </div>
        </div>
        )}
    </>
  )
}

export default Modal