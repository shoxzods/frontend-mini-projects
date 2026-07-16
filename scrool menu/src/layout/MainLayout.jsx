import { NavLink, Outlet} from "react-router-dom";
import styles from "./Layout.module.scss";
import { useState } from "react";

export default function MainLayout() {
    const [ scroll , setScroll ] = useState(true);

    function name() {
        if ( location.pathname == "/sidebar/vertical/full" || location.pathname == "/sidebar/vertical/auto" )
            return setScroll(true)
        
        setScroll(false)
    }

    window.onwheel = name;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <NavLink to="/sidebar/horizontal" className={ ({isActive }) => isActive ? styles.colors : styles.nav__items }>horizontal</NavLink>
                    <NavLink to="/sidebar/vertical" className={ ({isActive }) => isActive ? styles.colors : styles.nav__items }>vertical</NavLink>
                </nav>
            </header>
            <div className={ scroll ? styles.outlet : styles.outlet_clone}>
                <Outlet />
            </div>
        </div>
    )
}