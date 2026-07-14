import { Link } from "react-router-dom";
import styles from "./Fullscroll.module.scss";

export default function FullScroll() {
    return (
        <div className={styles.container}>
            <nav className={ styles.nav }>
                <Link className={styles.nav__links} to='/sidebar/vertical'>Full Side Nav</Link>
                <Link className={styles.nav__links} to='/sidebar/vertical/auto'>Auto Side Nav</Link>
            </nav>
            <div className={styles.left_side}>
                <h1>Full Sidebar</h1>  
            </div>
        </div>
    )
}