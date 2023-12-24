import { Link } from "react-router-dom";

export function Header() {
    return(
        <div>
            <Link to="/" >Incio</Link>
            <Link to="/perfil" >Perfil</Link>
        </div>
    )
}