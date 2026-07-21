import { createBrowserRouter, Navigate } from "react-router-dom";
import HoverDropDown from "./pages/HoverDropdown";
import MainLayout from "./layout/MainLayout";

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
                path:"/dropdown/hover",
                element: <HoverDropDown />
            }
        ]
    }
]
)

export default route;