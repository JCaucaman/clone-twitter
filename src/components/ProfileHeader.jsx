import { Link } from "react-router-dom";

export function ProfileHeader() {
    return(
       <div>
            <ul>
                <li> 
                    <Link to="">Posts</Link>
                </li>
                <li> 
                    <Link to="with_replies">Replies</Link>
                </li>
                <li> 
                    <Link to="likes">Likes</Link>
                </li>
            </ul>
       </div> 
    )
}