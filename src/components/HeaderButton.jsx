import { Link } from "react-router-dom";

export function HeaderButton(props) {

    const prop = props;

    return(
        <li className="pt-1 pb-1 w-14 lg:w-64">
            <Link to = {prop.link} className="text-white flex p-3 rounded-full hover:bg-opacity-10 hover:bg-white">
                <img className="w-7 h-7 invert" src={`../../public/${prop.img}`} alt={prop.Name} />
                <span className="text-2xl pl-3 pr-3 invisible lg:visible">
                    {prop.Name}
                </span>
            </Link>

        </li>
    )
}