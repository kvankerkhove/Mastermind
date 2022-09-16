import React from 'react'
import './ColorButton.css'

function ColorButton({color, setCurrentColor}) {
  

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

  return (
    <div onClick={handleOnClick} className='color-button notLitUp'  style={{backgroundColor: `${color}`}}></div>
  )
}

export default ColorButton

