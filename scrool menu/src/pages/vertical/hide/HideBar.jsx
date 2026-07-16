import styles from "./HideBar.module.scss";

export default function HideBar() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>This example demonstrates how to hide a navbar when the user starts to scroll the page.</h1>
            <h2 className={styles.pre_title}>Scroll down this frame to see the effect!</h2>
            <h3 className={styles.under_title}>Scroll up to show the navbar.</h3>
            <p className={styles.paragraph}>
                Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}