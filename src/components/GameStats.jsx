import React from 'react'

const GameStats = ({ score, correctGuesses, totalGuesses, resetGame, viewHistory }) => {
  return (
    <section className='grid gap-4'>
      <h2 className='text-2xl font-semibold'>Stats</h2>
      <section className='bg-bg-secondary p-4 lg:p-8 rounded-lg flex justify-between'>
        <p>Current Score: {score}%</p>
        <p>{correctGuesses}/{totalGuesses} Guessed Correctly</p>
        <button className="openBtn cursor-pointer font-semibold px-2 border border-primary/50 transition rounded bg-primary/5 hover:bg-primary/15"
          onClick={viewHistory}
        >View History</button>
        <button className="cursor-pointer font-semibold px-2 border border-primary/50 transition rounded bg-primary/5 hover:bg-primary/15"
          onClick={resetGame}
        >Reset Game</button>
      </section>
    </section>
  )
}

export default GameStats