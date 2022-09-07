import React, {useState} from 'react'
import './Modal.css'

function Modal({modalInfo, modal, handleNewGame}) {
    const {title, text, button} = modalInfo



    
  return (
    <>
        {modal && (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>{title}</h2>
                <p>
                    {text}
                </p>
                <button onClick={() => handleNewGame()} className="close-modal" >
                    {button}
                </button>
                {modalInfo.secondButton ? <button>{modalInfo.secondButton}</button> : null}
            </div>
        </div>
        )}
    </>
  )
}

export default Modal