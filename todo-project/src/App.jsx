import { useState } from 'react'
import { Todo } from './components/Todo/Todo'
import { Add } from './components/Add/Add'
import './App.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainHeader'>
        <button className='arrowButtonHeaderLeft'>⇦</button>
        <h1 className='logoHeader'>To Do</h1>
        <button className='arrowButtonHeaderRight'>⇨</button>
      </div>

      <Todo listText='Opvask' />
      <Todo listText='makfnæoqwf' />
      <Todo listText='Opvask' />

      <Add />

    </>
  )
}

export default App
