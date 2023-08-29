import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card/Card'
import Board from './Board/Board'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board gridSize={5} />
    </>
  )
}

export default App
