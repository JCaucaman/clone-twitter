import { HeaderButton } from "./HeaderButton.jsx"

export function Header() {
    return(
        <nav className="flex bg-amber-600 w-1/6 md:w-1/4  h-full justify-end">
            <ul className="bg-red-500 h-full w-fit mr-2 ml-2">
                <HeaderButton link="/" Name="Inicio" img="home.png" />
                <HeaderButton link="/perfil" Name="Perfil" img="user.png" />
            </ul>
        </nav>
    )
}