import { useState } from "react"
import links from "../utils/links"

export default function ClickDropDown() {
    const [ open , setOpen ] = useState(false)

    function toggleList() {
        setOpen( current => current ? false : true )
    }

    function closeList() {
        setOpen( () => false )
    }
    
    return (
        <>
            <button onClick={toggleList} className="bg-red-500 text-white p-2 cursor-pointer hover:bg-red-600 ease-in duration-200">Click Me</button>
            <ul className={` ${open ? "flex" : "hidden"}  flex-col bg-gray-200 max-w-3xs`}>
                { links.map( link => 
                    <li key={link.id} onClick={ closeList } className="p-2 hover:bg-gray-400 cursor-pointer duration-75 ease-in-out">{link.title}</li> 
                )}
            </ul> 
        </>
    )
}