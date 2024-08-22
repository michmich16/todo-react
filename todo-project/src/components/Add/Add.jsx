import style from './Add.module.scss';

export const Add = () =>{
    return(
        <div className={style.addStyle}>
            <button className={style.addButton}><span>⊕</span> Add New</button>
        </div>
    )
}