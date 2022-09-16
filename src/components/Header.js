import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <h1 id='mastermind'>Mastermind</h1>
      <p>The object of MASTERMIND is to guess a secret code consisting of a series of 4 colored circles. Each guess results in feedback narrowing down the possibilities of the code. The winner is the player who solves the secret code in 8 guesses of less.</p>
      <p>Each time a player guesses 4 colors, click CHECK to reveal feedback. The black peg means that there is a correct color in the correct spot. The white peg means that there is a correct color in the wrong spot. A void peg means a player did not pick a correct color.</p>

    </>
  )
}

export default Header