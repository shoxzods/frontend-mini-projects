import { Link } from "react-router-dom";  
import styles from "./AutoScroll.module.scss";

export default function AutoScroll() {
    return (
        <div className={styles.container}>
            <nav className={ styles.nav }>
                <Link className={styles.nav__links} to='/sidebar/vertical'>Full Side Nav</Link>
                <Link className={styles.nav__links} to='/sidebar/vertical/auto'>Auto Side Nav</Link>
            </nav>
            <div>
                <h1>Auto Scroll</h1>  
            </div>
        </div>
    )
}