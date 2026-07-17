import { NavLink  , Link } from "react-router-dom";  
import styles from "./AutoScroll.module.scss";

export default function AutoScroll() {
    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
                <nav className={ styles.nav }>
                    <Link className={ styles.nav__links } to='/sidebar/vertical/full'>Full Side Nav</Link>
                    <NavLink className={ ({isActive}) => isActive ? styles.active : styles.nav__links } to='/sidebar/vertical/auto'>Auto Side Nav</NavLink>
                    <Link className={styles.nav__links } to='/sidebar/vertical/fixed'>Fixed Side Nav</Link>
                    <Link className={styles.nav__links } to='/sidebar/vertical/hide'>Hide Header</Link>
                    <Link className={styles.nav__links } to='/sidebar/vertical/hidetop'>Hide Header Top</Link>
                    <Link className={styles.nav__links } to='/sidebar/vertical/sticky'>Stikcy Header</Link>
                    <Link className={styles.nav__links } to='/sidebar/vertical/shrink'>Shrink Header</Link>
                    <Link className={styles.nav__links } to='/sidebar/vertical/scroll'>Scroll Header</Link>
                </nav>
            </div>
            <div className={styles.right_side}>
                <h1>Auto Sidebar</h1> 
                                <p>
                    This sidebar is of full height (100%) and always shown. </p>
 

<p>Scroll this window to see the "fixed" effect.</p>

<p>
    Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
</p>

<p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
</p>            
            </div>
        </div>
    )
}