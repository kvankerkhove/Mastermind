import { render } from '@testing-library/react'
import React from 'react'
import './HintPegs.css'

function HintPegs({hintPegKey}) {

  let rightColorRightSpot = hintPegKey[0]
  let rightColorWrongSpot = hintPegKey[1]
  let blank = 4 - (rightColorRightSpot + rightColorWrongSpot)

  const renderRCRS = [...Array(rightColorRightSpot).keys()].map(pep => {
    return <div className="check-circle" style={{border: '2px solid black', backgroundColor: 'black'}}></div>
  })

  const renderRCWS = [...Array(rightColorWrongSpot).keys()].map(peg => {
    return <div className="check-circle" style={{border: '2px solid white', backgroundColor: "white", boxShadow: 'none'}}></div>
    
  })

  const renderBlank = [...Array(blank).keys()].map(peg => {
    return <div className="check-circle"></div>

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
