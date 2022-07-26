import React from 'react'
import ColorButton from './ColorButton'

function Panel({setCurrentColor, level}) {
    
    const renderButtons = level.map((color, i) => {
        return <ColorButton key={i} color={color} setCurrentColor={setCurrentColor}/>
    })
  return (
    <div className='Panel'>
        <h2>Panel</h2>
        {renderButtons}
        <button>new game</button>
    </div>
  )
}

export default Panel