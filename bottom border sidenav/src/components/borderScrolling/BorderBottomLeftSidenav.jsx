import { useState } from 'react';
import style from "./main.module.css";

function BorderBottomLeftSidenav() {
   const [ active , setActive ] = useState('home')
   
    const activate = ( state ) => setActive(state);

    return (
        <ul className={style.list}>
            <li onClick={() => activate('home')} className={style.list__items}>
                <a>home</a>
                <div className={active == "home" ? style.active : style.disactive }></div>
            </li>
            <li onClick={() => activate('new')} className={style.list__items}>
                <a>new</a>
                <div className={ active == "new" ? style.active: style.disactive}></div>
            </li>
            <li onClick={() => activate('service')} className={style.list__items}>
                <a>service</a>
                <div className={ active == "service" ? style.active : style.disactive}></div>
            </li>
        </ul>
    )
}

export default BorderBottomLeftSidenav;