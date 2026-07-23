import { useReducer } from "react"
import { UserContext } from "./useContext"
import route from "../routes"

const initialState = {
    open:false,
    hover:false,
    clicks:false,

    topnav:false,
    subnav:false,
    sidenav:false,
    
    subject:null,
    topics:null,
    sidebar:true,
    route:false,
    mobilemenu:false
}

function reducer( state , action ) {
    switch(action.type) {
        case "toggleMobileMenu":
            return {
                ...state,
                mobilemenu:state.mobilemenu ? false : true
            }
        case "closeMobileMenu":
            return {
                ...state,
                mobilemenu:false
            }

        case "checkRoute":
            return {
                ...state,
                route: action.payload
            }


        case "toggleSideBar":
            return {
                ...state,
                sidebar: state.sidebar ? false : true
            }

        case "toggleTopNav":
            return {
                ...state,
                topnav: state.topnav ? false : true
            }
        case "toggleSubNav": 
            return {
                ...state,
                subnav: state.subnav ? false : true
            }

        case "toggleSideNav":
            return {
                ...state,
                sidenav: state.sidenav ? false : true
            }

        case "toggleHover":
            return {
                ...state,
                open: state.hover ? false : true
            }
        
        case "toggleClick":
            return {
                ...state,
                click: state.click ? false : true
            }

        case "closeSubNav": 
            return {
                ...state,
                subnav:false
            }
            
        case "closeTopNav":
            return {
                ...state,
                topnav:false
            }

        case "closeClick":
            return {
                ...state,
                click: false
            }
        
        case "closeHover":
            return {
                ...state,
                hover: false
        }

        case "openHover":
            return {
                ...state,
                hover:true
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