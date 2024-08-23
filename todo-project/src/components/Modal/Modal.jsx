// Modal.jsx
import React, { useState } from 'react';
import style from './Modal.module.scss';

export const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue(''); // Clear input after submission
  };

  if (!isOpen) return null;

  return (
    <div className={style.modalStyle} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Add new To Do list</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Skriv her"
        />
        <div className={style.modalButtons}>
          <button className={style.modalButton} onClick={onClose}>Close</button>
          <button className={style.modalButton} onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};
