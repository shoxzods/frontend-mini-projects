import { Link , Navigate, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.scss";

export default function MainLayout() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.nav__items}>horizontal</Link>
                    <Link to="/sidebar/vertical" className={styles.nav__items}>vertical</Link>
                </nav>
            </header>
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    )
}