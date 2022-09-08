import React from 'react'
import ColorButton from './ColorButton'

function Panel({setCurrentColor, level, modal, handleNewGameButton, currentColor}) {
    
  const renderButtons = level.map((color, i) => {
      return <ColorButton key={i} color={color} setCurrentColor={setCurrentColor} modal={modal} currentColor={currentColor}/>
  })
  
  return (
    <div className='Panel'>
        <h2>Panel</h2>
        <div id='buttons'>
          {renderButtons}
        </div>
        <button onClick={() => handleNewGameButton('Would you like to start a new game?', 'Click YES to start a new game and NO to resume current game', 'YES', 'NO')} >new game</button>
    </div>
  )
}

export default Panel