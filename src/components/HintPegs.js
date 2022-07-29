import React from 'react'

function HintPegs({hintPegKey}) {

  let rightColorRightSpot = hintPegKey[0]
  let rightColorWrongSpot = hintPegKey[1]

  console.log(`RCRS: ${rightColorRightSpot}`)
  console.log(`RCWS: ${rightColorWrongSpot}  `)

 
  return (
    <div className="check-circles">
        <div className='check-circle' id='check-circle-1'></div>
        <div className='check-circle' id='check-circle-2'></div>
        <div className='check-circle' id='check-circle-3'></div>
        <div className='check-circle' id='check-circle-4'></div>
      </div>
  )
}

export default HintPegs

// style={{border: '2px solid black', backgroundColor: 'black'}}