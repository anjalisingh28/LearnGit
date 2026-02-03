import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)
  const user = [
    {id: 1,
      name: 'John Doe',
    age: 30,
    location: 'New York'},
    {id: 2,
      name: 'Jane Smith',
    age: 25,
    location: 'San Francisco'}
  ]
  return (
    <>
      <div>Hello World</div>
      {
        user.map((item) =>(<Card key = {item.id} {...item}/>))
      }
      <Home/>
    </>
  )
}

export default App
