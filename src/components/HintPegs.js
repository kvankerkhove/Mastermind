import { render } from '@testing-library/react'
import React from 'react'

function HintPegs({hintPegKey}) {

  let rightColorRightSpot = hintPegKey[0]
  let rightColorWrongSpot = hintPegKey[1]
  let blank = 4 - (rightColorRightSpot + rightColorWrongSpot)
  

  console.log(`RCRS: ${rightColorRightSpot}`)
  console.log(`RCWS: ${rightColorWrongSpot}`)
  console.log(blank)

  const renderRCRS = [...Array(rightColorRightSpot).keys()].map(pep => {
    return <div className="check-circle" style={{border: '2px solid black', backgroundColor: 'black'}}></div>
  })
  console.log(renderRCRS)

  const renderRCWS = [...Array(rightColorWrongSpot).keys()].map(peg => {
    return <div className="check-circle" style={{border: '2px solid black', backgroundColor: "white"}}></div>
    
  })
  console.log(renderRCWS)

  const renderBlank = [...Array(blank).keys()].map(peg => {
    return <div className="check-circle"></div>

  })
  console.log(renderBlank)



 
  return (
    <div className="check-circles">
      {renderRCRS}
      {renderRCWS}
      {renderBlank}
      </div>
  )
}

export default HintPegs

// style={{border: '2px solid black', backgroundColor: 'black'}}

{/* <div className='check-circle' id='check-circle-1'></div>
  <div className='check-circle' id='check-circle-2'></div>
  <div className='check-circle' id='check-circle-3'></div>
  <div className='check-circle' id='check-circle-4'></div> */}