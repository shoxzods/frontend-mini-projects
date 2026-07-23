import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/useContext";
import { NavLink, useLocation } from "react-router-dom";
import paths from "../utils/paths";

export default function SideNavDropDown() {
    const { state , dispatch } = useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        dispatch({type:"checkRoute" , payload:true})
    }, []);

    return (
        <nav className={` ${ state.sidebar ? "w-60" : "w-0" } ease-linear duration-100 border-solid h-full bg-[#313030] overflow-auto`}>
            <div className="relative">
                <button name="drop-btn" onClick={ () => dispatch( {type:"toggleSideNav"})} className="bg-red-500 py-2 text-white text-[20px] cursor-pointer w-full flex px-4 items-center justify-between">
                    <p>dropdown</p>
                   <i className="bi bi-caret-down-fill "></i>
                </button>
                <nav className={`${state.sidenav ? "h-96" : "h-0"} flex flex-col absolute w-full overflow-auto transition-all ease-linear duration-300`}>
                     { paths.map( path => 
                        <NavLink key={path.id} to={`/dropdown/${path.path}`} className={  ( { isActive } ) => {
                           return `py-2 pl-4 cursor-pointer bg-[#514f4f] hover:text-white font-extrabold ${ isActive ? "text-white" : "text-[#bebcbc]" }`
                        }}>
                            { path.name }
                        </NavLink>                     
                    )}
                </nav>
            </div>
        </nav>
    )
}