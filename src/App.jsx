import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Play from './components/Play'

function App() {
  const [start, setStart] = useState(false)

    const startHandler = () => {
        setStart(true)
    }

  return (
    <>
      <div className='overflow-x-hidden'>
        {
          !start ? <Home startHandler={startHandler}/>:<Play />
        }
      </div>
    </>
  )
}

export default App
