// import { render } from '@testing-library/react'
import React from 'react'
import './HintPegs.css'

function HintPegs({hintPegKey}) {

  let rightColorRightSpot = hintPegKey[0]
  let rightColorWrongSpot = hintPegKey[1]
  let blank = 4 - (rightColorRightSpot + rightColorWrongSpot)

  const renderRCRS = [...Array(rightColorRightSpot).keys()].map(pep => {
    return (
      <div className='check-circle-container'>
        <div className="check-circle" style={{height: '1.6vw', width: '1.6vw', backgroundColor: "#605D5D", boxShadow: 'inset -.1vw -.1vw .7vw .1vw black'}}></div>
      </div>
    )
  })

  const renderRCWS = [...Array(rightColorWrongSpot).keys()].map(peg => {
    return (
      <div className='check-circle-container'>
        <div className="check-circle" style={{height: '1.6vw', width: '1.6vw', backgroundColor: "white", boxShadow: 'inset -.1vw -.1vw .5vw .1vw gray'}}></div>
      </div>
    )
  })

  const renderBlank = [...Array(blank).keys()].map(peg => {
    return (
      <div className='check-circle-container'>
        <div className="check-circle"></div>
      </div>
    )
  })

  return (
    <div className="check-circles">
      {renderRCRS}
      {renderRCWS}
      {renderBlank}
      </div>
  )
}

export default HintPegs

// border: '2px solid white'
