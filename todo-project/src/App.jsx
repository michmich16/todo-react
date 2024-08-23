import { useState } from 'react'
import { Todo } from './components/Todo/Todo'
import { Add } from './components/Add/Add'
import { Modal } from './components/Modal/Modal'
import './App.scss'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (input) => {
    alert(`Submitted: ${input}`);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
      <div className='mainHeader'>
        <button className='arrowButtonHeaderLeft'>⇦</button>
        <h1 className='logoHeader'>To Do</h1>
        <button className='arrowButtonHeaderRight'>⇨</button>
      </div>

      <Todo listText='Opvask' />
      <Todo listText='makfnæoqwf' />
      <Todo listText='Opvask' />

      <Add onClick={handleOpenModal}/>

    </>
  )
}

export default App
