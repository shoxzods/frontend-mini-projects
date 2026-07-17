import { NavLink, Outlet} from "react-router-dom";
import styles from "./Layout.module.scss";
import { useState } from "react";

export default function MainLayout() {
    const [ hide , setHide ] = useState(true); 
    const [ sticky , setSticky ] = useState(false);
    const [ shrink , setShrink ] = useState(false);
    const [ thin , setThin ] = useState(false);

    function name() {
        if ( location.pathname == "/sidebar/vertical/full" || location.pathname == "/sidebar/vertical/auto" ) {
            setSticky(false)
            setShrink(false)

            return window.document.documentElement.style.overflowY = "hidden";
        }

        if ( location.pathname == "/sidebar/vertical/hide" )
            if ( window.scrollY > 10 )
                return setHide(false)
        
        if ( location.pathname == "/sidebar/vertical/hidetop" ) {
            window.document.documentElement.style.overflowY = "auto";
            setSticky(false)

            if ( window.scrollY < 10 ) {
                return setHide(false)
            }
        }

        if ( location.pathname == "/sidebar/vertical/sticky" ) {
                window.document.documentElement.style.overflowY = "auto";
            return setSticky(true)
        }

        if ( location.pathname == "/sidebar/vertical/shrink" ) {
            setShrink(true);
                window.document.documentElement.style.overflowY = "auto";

            if ( window.scrollY > 10 ) {
                return setThin(true)
            }

            return setThin(false)
        }

        if ( location.pathname == "/sidebar/vertical/scroll" ) {       
            window.document.documentElement.style.overflowY = "auto";
            setTimeout(() => localStorage.setItem("scroll" , window.scrollY) , 50 );


            if ( +localStorage.getItem("scroll") > window.scrollY ) {
                setThin(false)
                setShrink(true)
            } else
                setThin(true)

            return 
        }

            setShrink(false)
            setSticky(false)
            setHide(true)
            window.document.documentElement.style.overflowY = "auto";
    }

    window.onload = name;
    window.onload = name;
    window.onwheel = name;
    window.onscroll = name;
    window.onmouseenter = name;
    window.onmouseleave = name;
    window.onmousedown = name;
    window.onmouseover = name;
    window.onblur = name;
    window.onmousemove = name;
    window.onmouseup = name;

    return (
        <div className={styles.container}>
            <div className={ sticky ? styles.menu__show : styles.menu}>
                <h1 className={styles.title}>MAIN MENU</h1>
                <p className={styles.title__pre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, magnam.</p>
            </div>
            <header className={ hide ? sticky ? styles.sticky : shrink ? thin ? styles.header_thin : styles.header__shrink : styles.header : styles.header_hide}>
                <nav className={ hide ? styles.nav : styles.text_hide }>
                    <NavLink to="/sidebar/horizontal" className={styles.nav__items }>
                        {({ isActive }) => (
                            <>
                                <p className={ isActive ? styles.active_color:""}>horizontal</p>
                                <div className={ isActive ? styles.active_border:styles.border}></div>
                            </>
                        )}
                    </NavLink>
                    <NavLink to = "/sidebar/vertical" className={styles.nav__items }>
                        {({ isActive }) => (
                            <>
                                <p className={ isActive ? styles.active_color:""}>vertical</p>
                                <div className={ isActive ? styles.active_border:styles.border}></div>
                            </>
                        )}
                    </NavLink>
                </nav>
            </header>
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    )
}