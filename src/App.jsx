import { useState } from 'react'
import './App.css'
import Dice from './Dice'



function App() {
  
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    return [1,1,1,1,1,1,1,1,1,1].map(() => Math.floor(Math.random() * 6 + 1))
  }

  function rollDice(){
    setDice(allNewDice())
  }

  const dice_components = dice.map((die_num, index) => {
    return <Dice key={index} number={die_num}/>
  })

  return (
    <main className="container flex flex-col items-center mx-auto mt-8 p-5 rounded-md h-auto max-w-lg bg-mygrey">
      <h1 className='mt-8 text-5xl font-bold'>Tenzies</h1>
      <p className='mt-2 text-2xl font-regular w-3/4 text-center'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='mt-8 w-full grid grid-cols-5 grid-rows-2 justify-items-center gap-y-6'>
        {dice_components}
      </div>
      <button className="mt-8 bg-myblue text-white px-8 py-4 rounded-md drop-shadow-lg hover:bg-blue-600 " onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
