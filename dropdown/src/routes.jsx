import { createBrowserRouter, Navigate } from "react-router-dom";
import HoverDropDown from "./pages/HoverDropdown";
import MainLayout from "./layout/MainLayout";
import ClickDropDown from "./pages/ClickDropDown";
import CascadingDropDown from "./pages/CascadingDropDown";
import NotFound from "./pages/NotFound";
import SideNavDropDown from "./pages/SideNavDropdown";
import DropUp from "./pages/DropUp";

const route = createBrowserRouter(
[
    {
        path:"/",
        element: <MainLayout />,
        
        children: [
            {
                index:true,
                element: <Navigate to="/dropdown/hover" />
            },

            {
                path:"dropdown/hover",
                element: <HoverDropDown />
            },

            {
                path:"dropdown/click",
                element: <ClickDropDown />
            },
            {
                path:"dropdown/cascading",
                element:<CascadingDropDown/>
            },
            {
                path:"dropdown/sidenav",
                element:<SideNavDropDown />
            },
            {
                path:"dropdown/dropup",
                element:<DropUp />
            }
        ]
    },

    {
        path:"*",
        element:<NotFound />
    }
]
)

export default route;