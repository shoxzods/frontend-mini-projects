import { Link , NavLink } from "react-router-dom";
import styles from "./Fullscroll.module.scss";

export default function FullScroll() {
    return (
        <div className={styles.container}>
            <nav className={ styles.nav }>
                <NavLink className={ ({isActive}) => isActive ? styles.active : styles.nav__links } to='/sidebar/vertical/full'>Full Side Nav</NavLink>
                <Link className={styles.nav__links} to='/sidebar/vertical/auto'>Auto Side Nav</Link>
                <Link className={styles.nav__links} to='/sidebar/vertical/fixed'>Fixed Side Nav</Link>
                <Link className={styles.nav__links } to='/sidebar/vertical/hide'>Hide Header</Link>
            </nav>
            <div className={styles.left_side}>
                <h1>Full Sidebar</h1>
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