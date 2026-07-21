import { useReducer } from "react"
import { UserContext } from "./useContext"

const initialState = {
    open:false
}

function reducer( state , action ) {
    switch(action.type) {
        case "toggleList":
            return {
                open: state.open ? false : true
            }
        
        case "closeList":
            return {
                open: false
            }
        
        case "openList":
            return {
                open:true
            }
        
        default: 
            return state
    }
}

export default function UseProvider({children}) {
    const [ state , dispatch ] = useReducer( reducer , initialState )

    return <UserContext.Provider value={{ state , dispatch }}>
        { children }
    </UserContext.Provider>
}