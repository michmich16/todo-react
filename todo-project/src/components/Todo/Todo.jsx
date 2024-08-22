import style from './Todo.module.scss'
import { useState } from 'react'

export const Todo = (props) =>{

    return(
        <div className={style.todoStyle}>
            <li>{props.listText}</li>
            <ul>
                <button className={style.arrowButtonLeft}>←</button>
                <button className={style.deleteButton}>-</button>
                <button className={style.arrowButtonRight}>→</button>
            </ul>
        </div>
    )
}
