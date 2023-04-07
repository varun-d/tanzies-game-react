import { useEffect, useState } from 'react'
import './App.css'
import Dice from './Dice'
import { nanoid } from 'nanoid'
import ReactConfetti from 'react-confetti'
import useSound from 'use-sound'

import switchSound from './switch_on.mp3'
import winSound from './win.mp3'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  const [playSwitchSound] = useSound(switchSound, { volume: 0.6 })
  const [playWin] = useSound(winSound, { volume: 0.4 })

  useEffect(() => {
    const _testCondition =
      dice.every((item) => item.isHeld) &&
      dice.every((currentValue) => currentValue.val === dice[0].val)

    if (_testCondition) {
      playWin()
      setTenzies(true)
    }
  }, [dice])

  function allNewDice() {
    const _diceSeed = [
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
      { val: 1, isHeld: false, id: nanoid() },
    ]
    return _diceSeed.map((item) => ({
      ...item,
      val: Math.floor(Math.random() * 6 + 1),
    }))
  }

  // Add function here when isHeld is true, then do not change val?? if false, then change val...
  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(allNewDice())
    } else {
      const _rollDice = dice.map((item) => {
        return {
          ...item,
          val: !item.isHeld ? Math.floor(Math.random() * 6 + 1) : item.val,
        }
      })
      setDice(_rollDice)
    }
  }

  console.log(dice)

  function holdDice(e, id) {
    playSwitchSound()
    const _newdice = dice.map((item) => {
      return {
        ...item,
        isHeld: item.id === id ? !item.isHeld : item.isHeld,
      }
    })

    setDice(_newdice)
  }

  const diceComponents = dice.map((item, index) => {
    return (
      <Dice
        key={item.id}
        id={item.id}
        number={item.val}
        isHeld={item.isHeld}
        onClick={holdDice}
      />
    )
  })

  return (
    <main className='container flex flex-col items-center mx-auto mt-8 p-5 rounded-md h-auto max-w-lg bg-white bg-hero bg-cover'>
      <h1 className='mt-8 text-5xl font-bold'>Tenzies</h1>
      <p className='mt-2 text-2xl font-regular w-3/4 text-center'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='mt-8 w-full grid grid-cols-5 grid-rows-2 justify-items-center gap-y-6'>
        {diceComponents}
      </div>
      <button
        className='mt-8 bg-myblue text-white px-8 py-4 rounded-md drop-shadow-lg md:hover:bg-blue-600'
        onClick={rollDice}
      >
        {tenzies ? 'Play New Game!' : 'Roll'}
      </button>

      {tenzies && <ReactConfetti />}
    </main>
  )
}

export default App
