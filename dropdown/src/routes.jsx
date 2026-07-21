import { createBrowserRouter, Navigate } from "react-router-dom";
import HoverDropDown from "./pages/HoverDropdown";
import MainLayout from "./layout/MainLayout";
import ClickDropDown from "./pages/ClickDropDown";
import CascadingDropDown from "./pages/CascadingDropDown";
import NotFound from "./pages/NotFound";

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