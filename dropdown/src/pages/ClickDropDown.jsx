import { useContext, useReducer, useState } from "react"
import { UserContext } from "../context/useContext";
import links from "../utils/links"

export default function ClickDropDown() {
    const { state , dispatch } = useContext(UserContext);
    
    return (
        <>
            <button onClick={ () => dispatch( {type:"toggleList"})} className="bg-red-500 text-white p-2 cursor-pointer hover:bg-red-600 ease-in duration-200">Click Me</button>
            <ul className={` ${state.open ? "flex" : "hidden"}  flex-col bg-gray-200 max-w-3xs`}>
                { links.map( link => 
                    <li key={link.id} onClick={() => dispatch({type:"closeList"}) } className="p-2 hover:bg-gray-400 cursor-pointer duration-75 ease-in-out">{link.title}</li> 
                )}
            </ul> 
        </>
    )
}