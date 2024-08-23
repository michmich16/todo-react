import style from './Add.module.scss';
import { useState } from 'react';

export const Add = ({onClick}) =>{
    return(
        <div className={style.addStyle}>
            <button className={style.addButton} onClick={onClick}><span>⊕</span> Add New</button>
        </div>
    )
}