import { useContext, useEffect } from "react"
import { UserContext } from "../context/useContext"
import links from "../utils/links"

export default function HoverDropDown() {
    const { state, dispatch } = useContext(UserContext)
    
    useEffect(() => {
                dispatch({type:"checkRoute" , payload:false})
    }, []);
    
    return (
        <div className="pt-40 pl-4 relative">
            <ul className={` ${state.hover ? "flex" : "hidden"} absolute bottom-10 w-full flex-col bg-gray-200 max-w-3xs`}>
                { links.map( link => 
                    <li key={link.id} onMouseEnter={() => dispatch({type:"openHover"})} onMouseLeave={() => dispatch({type:"closeHover"})} className="p-2 hover:bg-gray-400 cursor-pointer duration-75 ease-in-out">{link.title}</li> 
                )}
            </ul> 
            <button onMouseEnter={() => dispatch({type:"openHover"})} onMouseLeave={() => dispatch({type:"closeHover"})} className="bg-blue-500 text-white p-2 cursor-pointer hover:bg-blue-700 ease-in duration-200">Drop Up</button>
        </div>
    )
}