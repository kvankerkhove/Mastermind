import React, { useEffect } from 'react'
import BoardTile from './BoardTile'

function Board({currentColor, turn, setTurn, answerKey={answerKey}}) {
    const n = 8
    const renderTiles = [...Array(n)].map((e, i) => {
        return <BoardTile key={i} guess={i + 1} currentColor={currentColor} turn={turn} setTurn={setTurn} answerKey={answerKey}/>
    })

  return (
    <div className="Board">
        <h2>Board</h2>
        {renderTiles}
    </div>
  )
}

export default Board