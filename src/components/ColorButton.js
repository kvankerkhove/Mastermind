import React from 'react'
import './ColorButton.css'

function ColorButton({color, setCurrentColor}) {
    const handleOnClick = (e) => {
        // console.log(e.target.style.backgroundColor)
        setCurrentColor(e.target.style.backgroundColor)

    }
  return (
    <div onClick={handleOnClick} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = .75}className='color-button' style={{backgroundColor: `${color}`}}></div>
  )
}

export default ColorButton