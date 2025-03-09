import React from 'react'
import dices from '../assets/images/dices.png'

export default function Home({startHandler}) {
    
  return (
    <div className='w-screen h-screen '>
        <div className='flex flex-col md:flex-row justify-evenly md:justify-evenly h-full w-full items-center'>
            <div className="left">
                <img src={dices} alt="" />
            </div>
            <div className="right flex flex-col justify-center gap-6 items-end">
                <h1 className='text-6xl md:text-8xl font-bold'>Dice Game</h1>
                <button onClick={startHandler} className='bg-black text-white w-full md:w-fit px-18 font-semibold cursor-pointer py-2 rounded-md'>Play Now</button>
            </div>
        </div>
    </div>
  )
}
