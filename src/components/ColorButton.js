import React from 'react'
import './ColorButton.css'

function ColorButton({color, setCurrentColor, modal, currentColor}) {
  

  const handleOnClick = (e) => {
    e.target.parentNode.childNodes.forEach(child => {
      child.classList.remove('litUp')
      child.classList.add('notLitUp')

    })
    e.target.style.opacity = 1
      setCurrentColor(e.target.style.backgroundColor)
      e.target.classList.remove('notLitUp')
      e.target.classList.add('litUp')
  
  }

  const handleMouseOver = (e) => {
    if(!modal) e.target.style.opacity = .6;
  }

  const handleMouseOut = (e) => {
    if(!modal) e.target.style.opacity = 1;
  }

  

  return (
    <div onClick={handleOnClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='color-button notLitUp'  style={{backgroundColor: `${color}`}}></div>
  )
}

export default ColorButton