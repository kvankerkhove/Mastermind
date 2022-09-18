import React from 'react'
import ColorButton from './ColorButton'
import './Panel.css'

function Panel({setCurrentColor, level, modal, handleNewGameButton, currentColor}) {
    
  const renderButtons = level.map((color, i) => {
      return <ColorButton key={i} color={color} setCurrentColor={setCurrentColor} modal={modal} currentColor={currentColor}/>
  })
  
  return (
    <div className='Panel'>
        <div id='buttons'>
          {renderButtons}
        </div>
        <div id='radio-buttons'>
          <label class="radio-btn">
            <input type="checkbox" checked="checked"/>
            <span class="checkmark"></span>
            Easy
          </label>

          <label class="radio-btn">
            <input type="checkbox"/>
            <span class="checkmark"></span>
            Medium
          </label>

          <label class="radio-btn">
            <input type="checkbox"/>
            <span class="checkmark"></span>
            Hard
          </label>
        </div>
        <br></br>
        <button id='new-game-button' onClick={() => handleNewGameButton('Would you like to start a new game?', 'Click YES to start a new game and NO to resume current game', 'YES', 'NO')} >new game</button>
    </div>
  )
}

export default Panel