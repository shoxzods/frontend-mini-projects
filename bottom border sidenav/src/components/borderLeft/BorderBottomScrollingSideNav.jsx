import { useState } from "react";
import style from "./main.module.css";

export default function BorderBottomSrollingSidenav() {
    const [ position , setPosition ] = useState('home')

    function activation(type) {
        setPosition(type);
    }
    
    return (
        <ul className={style.list}>
            <li onClick={() => activation('home')} className={style.list__items}>
                home
            </li>
            <div className = { position == "home" ? `${style.bottom_border} ${style.position_home}` : position == "service" ? `${style.bottom_border} ${style.position_service}`: position == "news" ? `${style.bottom_border} ${style.position_news}` : "" }></div>
            <li onClick={ () => activation('service') } className={style.list__items}>
                service
            </li>
            <li onClick={ () => activation('news') } className={style.list__items}>
                news
            </li>
        </ul>
    )
}