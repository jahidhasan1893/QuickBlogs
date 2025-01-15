import NavMenu from "@/components/Nav-menu"
import SearchBar from "./searchbar"
import Profile from "./profile"

export default function Header(){
    return (
        <div className="flex justify-around p-5 w-full bg-orange-700">
            < NavMenu />
            < SearchBar />
            < Profile />
        </div>
    )
}