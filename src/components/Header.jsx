import { HeaderButton } from "./HeaderButton.jsx"

export function Header() {
    return(
        <nav className="flex bg-amber-600 w-1/6   h-full justify-end
        md:w-1/4"
        >
            <ul className="bg-red-500 h-full w-fit mr-2 ml-2">
                <HeaderButton link="/" Name="Inicio" img="home.png" />
                <HeaderButton link="/profile" Name="Profile" img="user.png" />
            </ul>
        </nav>
    )
}