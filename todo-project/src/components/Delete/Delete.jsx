import style from './Delete.module.scss';
import { useState } from 'react';

export const Delete = (props) =>{

return (
    <div className={style.deleteStyle}>
    <button className={style.deleteButton} onClick={props.handleDeleteAll}><span>☒</span> Delete All</button>
    </div>
)

}