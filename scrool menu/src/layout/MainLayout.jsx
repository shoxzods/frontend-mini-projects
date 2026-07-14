import { NavLink, Outlet} from "react-router-dom";
import styles from "./Layout.module.scss";

export default function MainLayout() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <NavLink to="/sidebar/horizontal" className={ ({isActive }) => isActive ? styles.colors : styles.nav__items }>horizontal</NavLink>
                    <NavLink to="/sidebar/vertical" className={ ({isActive }) => isActive ? styles.colors : styles.nav__items }>vertical</NavLink>
                </nav>
            </header>
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
        
    )
}