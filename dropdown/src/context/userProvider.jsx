import { useReducer } from "react"
import { UserContext } from "./useContext"

const initialState = {
    open:false,
    subject:null,
    topics:null,
}

function reducer( state , action ) {
    switch(action.type) {
        case "toggleList":
            return {
                ...state,
                open: state.open ? false : true
            }
        
        case "closeList":
            return {
                ...state,
                open: false
            }
        
        case "openList":
            return {
                ...state,
                open:true
            }

        case "subjectSelection":
            return {
                ...state,
                subject: action.payload
            }
        case "topicsSelection":
            return {
                ...state,
                topics:action.payload
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