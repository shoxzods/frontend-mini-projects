import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="h-screen">
            <header className="px-2 py-4">
                <nav>
                    <Link to="/dropdown/hover" className="cursor-pointer border-b-2 border-red-500 hover:text-red-400 duration-200 ease-in">hover</Link>
                </nav>
            </header>
            <div className="px-2">
                <Outlet />
            </div>
        </div>
    )
}