import { Link, Outlet } from "react-router-dom";
import paths from "../utils/paths";

export default function MainLayout() {
    return (
        <div className="h-screen">
            <header className="px-2 py-4">
                <nav className="flex gap-3">
                    { paths.map( path => <Link key={path.id} to={`/dropdown/${path.path}`} className="cursor-pointer border-b-2 border-red-500 hover:text-red-400 duration-200 ease-in">{path.name}</Link> ) }
                </nav>
            </header>
            <div className="px-2">
                <Outlet />
            </div>
        </div>
    )
}