import styles from "./FixedScroll.module.scss";
import texts from "../../../utils/text";

export default function FixedScroll() {

   return (
    <div className={styles.fixed}>
       <h1> Fixed Top Menu</h1>
       <h2> Scroll this page to see the effect </h2>
       <h2> The navigation bar will stay at the top of the page while scrolling </h2>
        { texts.map(
            (item , index) => <p key={index} className={styles.texts}>{item}</p>
        ) }
           </div>
   )
}