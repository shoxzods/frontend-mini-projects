import { useState , useReducer, useContext } from "react"
import { UserContext } from "../context/useContext"
import links from "../utils/links"

export default function HoverDropDown() {
    const { state, dispatch } = useContext(UserContext)
    
    return (
        <>
            <button onMouseEnter={() => dispatch({type:"openList"})} onMouseLeave={() => dispatch({type:"closeList"})} className="bg-red-500 text-white p-2 cursor-pointer hover:bg-red-600 ease-in duration-200">Hover Me</button>
            <ul className={` ${state.open ? "flex" : "hidden"}  flex-col bg-gray-200 max-w-3xs`}>
                { links.map( link => 
                    <li key={link.id} onMouseEnter={() => dispatch({type:"openList"})} onMouseLeave={() => dispatch({type:"closeList"})} className="p-2 hover:bg-gray-400 cursor-pointer duration-75 ease-in-out">{link.title}</li> 
                )}
            </ul> 
        </>
    )
}