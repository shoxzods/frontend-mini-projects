import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import paths from "../utils/paths";
import { useActionState, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/useContext";

export default function MainLayout() {
    const { state , dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col">
            <header className="text-white bg-[#313030] relative flex justify-between">
                <nav className="flex  justify-between relative max-[768px]:w-full">
                    <button onClick={() => navigate('/') } className="px-3 py-1.5 cursor-pointer">
                        <i className="bi bi-code-slash text-3xl"></i>
                    </button>
                    
                    <div className={`${state.mobilemenu ? "max-[768px]:h-60" : "max-[768px]:h-0"} duration-200 ease-linear flex items-center drop-menu`}>
                    { paths.map( path =>  
                        <NavLink onClick={() => {
                            dispatch({type:"closeSubNav"})
                            dispatch({type:"closeTopNav"})
                            dispatch({type:"closeMobileMenu"})
                        }}  key={path.id} to={`/dropdown/${path.path}`} className={  ( { isActive } ) => {
                           return `cursor-pointer w-full text-center py-3 px-5 hover:bg-red-600 duration-75  ease-in ${ isActive ? "bg-red-600" : "" }`
                        }}>
                            { path.name }
                        </NavLink>                   
                    )}
                    </div>

                
                    <div className="relative max-[1024px]:hidden">
                        <p onClick={() => {
                                dispatch({type:"toggleTopNav"})
                                dispatch({type:"closeSubNav"})
                            }} className={` ${ state.topnav ? "bg-red-600" : "" } py-3 px-8 cursor-pointer hover:bg-red-600 flex items-center gap-1`}>
                                topnav 
                            <i className="bi bi-caret-down-fill translate-px "></i>
                        </p>
                        <div className={`${ state.topnav ? "h-60" : "h-0"} w-full duration-200 ease-in transition-all overflow-hidden flex flex-col bg-gray-600 absolute z-10`}>
                         { paths.map( path => 
                            <NavLink onClick={() => dispatch({type:"closeTopNav"})} key={path.id} to={`/dropdown/${path.path}`} className={  ( { isActive } ) => {
                               return `cursor-pointer py-3 px-5 hover:bg-red-600 duration-75 ease-in ${ isActive ? "bg-red-600" : "" }`
                            }}>
                                { path.name }
                            </NavLink>                   
                         )}  
                        </div>
                    </div>
                <button onClick={ () => {
                                    dispatch({type:"toggleSubNav"})
                                    dispatch({type:"closeTopNav"})
                                } } className={` ${ state.subnav ? "bg-red-600" : "" } py-3 px-5 cursor-pointer hover:bg-red-600 flex gap-1 items-center max-[1024px]:hidden`}>
                        subnav
                        <i className="bi bi-caret-down-fill translate-px"></i>
                </button>

                {/* mobile mene */}
                <button onClick={() => dispatch({ type:"toggleMobileMenu" })} className="cursor-pointer px-4 bg-black ease-linear hidden duration-75 hover:bg-[#5b5a5a] max-[768px]:block">
                        <i className="bi bi-list text-2xl"></i>
                </button>
                </nav>

                { state.route ? <button onClick={ () => { dispatch({type:"toggleSideBar"}) 
                                dispatch({type:"closeSubNav"})   
                                dispatch({type:"closeTopNav"}) 
                } } className="cursor-pointer px-4 bg-black ease-linear duration-75 hover:bg-[#5b5a5a] max-[768px]:hidden">
                        <i className="bi bi-list text-2xl"></i>
                </button>
                : "" }


                <div className={`${ state.subnav ? "h-12" : "h-0"} w-full duration-200 ease-in transition-all overflow-hidden top-12 left-0 flex bg-gray-600 absolute z-10`}>
                            { paths.map( path => 
                                <NavLink key={path.id} onClick={() => dispatch({type:"closeSubNav"})}  to={`/dropdown/${path.path}`} className={  ( { isActive } ) => {
                                   return `cursor-pointer py-3 px-5 hover:bg-red-600 duration-75 ease-in ${ isActive ? "bg-red-600" : "" }`
                                }}>
                                    { path.name }
                                </NavLink>                   
                                )}
                </div>
            </header>
            <div className="h-full">
                <Outlet />
            </div>
        </div>
    )
}