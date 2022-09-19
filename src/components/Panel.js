import React from 'react'
import ColorButton from './ColorButton'
import './Panel.css'

function Panel({setCurrentColor, level, modal, handleNewGameButton, currentColor}) {
    
  const renderButtons = level.map((color, i) => {
      return <ColorButton key={i} color={color} setCurrentColor={setCurrentColor} modal={modal} currentColor={currentColor}/>
  })

  const handleOnChange = (e) => {
    let checkBoxes = document.getElementsByClassName('radio-btn')

    for(let i = 0; i < checkBoxes.length; i++){
      if(checkBoxes[i].checked === true){
        checkBoxes[i].checked = false
      }
    }

    e.checked = true
  }
  
  return (
    <div className='Panel'>
        <div id='buttons'>
          {renderButtons}
        </div>
        <button id='change-level-button'>change level</button>
        <br></br>
        <button id='new-game-button' onClick={() => handleNewGameButton('Would you like to start a new game?', 'Click YES to start a new game and NO to resume current game', 'YES', 'NO')} >new game</button>
    </div>
  )
}

export default Panel