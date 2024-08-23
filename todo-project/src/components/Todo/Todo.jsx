// Todo.jsx
import style from './Todo.module.scss';

export const Todo = ({ listText, onDelete }) => {
  return (
    <div className={style.todoStyle}>
      <li>{listText}</li>
      <ul>
        <button className={style.arrowButtonLeft}>⇦</button>
        <button className={style.deleteButton} onClick={onDelete}>─</button>
        <button className={style.arrowButtonRight}>⇨</button>
      </ul>
    </div>
  );
};
