import { Link } from "react-router-dom";

export function Header() {
    return(
        <div>
            <ol>
                <li>
                    <Link to="/" >Incio</Link>
                </li>
                <li>
                    <Link to="/perfil" >Perfil</Link>
                </li>
            </ol>
        </div>
    )
}