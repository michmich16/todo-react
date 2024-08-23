// App.jsx
import { useState } from 'react';
import { Todo } from './components/Todo/Todo';
import { Add } from './components/Add/Add';
import { Modal } from './components/Modal/Modal';
import './App.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState([]); // Manage list of todos here

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTodo = (input) => {
    if (input.trim() === '') {
      alert("You must write something!");
      return;
    }
    setTodos([...todos, input]);
    setIsModalOpen(false);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddTodo} />
      <div className="mainHeader">
        <button className="arrowButtonHeaderLeft">⇦</button>
        <h1 className="logoHeader">To Do</h1>
        <button className="arrowButtonHeaderRight">⇨</button>
      </div>

      <ul id="myUL">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            listText={todo}
            onDelete={() => handleDeleteTodo(index)}
          />
        ))}
      </ul>

      <Add onClick={handleOpenModal} />
    </>
  );
}

export default App;
