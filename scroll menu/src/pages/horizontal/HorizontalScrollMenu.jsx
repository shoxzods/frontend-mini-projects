import styles from "./main.module.scss";
import lists from "../../utils/lists";

function HorizontalScrollMenu() {
    return (
        <div className={styles.outlet}>
            <h1>
                Horizontal Scroll Menu
            </h1>

            <div className={styles.container}>
                { lists.map( (list) => <p key={list.id} className={styles.container__items}>{list.title}</p> ) }
            </div>
        </div>
    )
}

export default HorizontalScrollMenu;