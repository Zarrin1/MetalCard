import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Left from './components/left-main/Left'
import Right from './components/right-main/Right'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <div className='main'>
     <Left />
     <Right />
     </div>
    
    </>
  )
}

export default App
