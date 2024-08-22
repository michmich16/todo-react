import { useState } from 'react'
import { Todo } from './components/Todo/Todo'
import './App.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainHeader'>
        <button className='arrowButtonHeaderLeft'>←</button>
        <h1 className='logoHeader'>To Do</h1>
        <button className='arrowButtonHeaderRight'>→</button>
        </div>

        <Todo listText='Opvask'/>
        <Todo listText='makfnæoqwfphwofwoqjwpkvoånåvjpvnjvpnåeij opniowjfiw¨rvnopiejrvåwqå'/>
        <Todo listText='Opvask'/>


    </>
  )
}

export default App
