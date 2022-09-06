import React from 'react'
import './ColorButton.css'

function ColorButton({color, setCurrentColor, modal}) {
    const handleOnClick = (e) => {
        setCurrentColor(e.target.style.backgroundColor)
    }

    const handleMouseOver = (e) => {
      if(!modal) e.target.style.opacity = 1;
    }

    const handleMouseOut = (e) => {
      if(!modal) e.target.style.opacity = .75;
    }

  return (
    <div onClick={handleOnClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='color-button' style={{backgroundColor: `${color}`}}></div>
  )
}

export default ColorButton