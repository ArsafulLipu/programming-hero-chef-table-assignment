import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-48 my-10">
    <Navbar></Navbar>
    <Banner></Banner>
     
    </div>
  )
}

export default App
