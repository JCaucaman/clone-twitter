export function UserImg(props) {

    const prop = props;

    return(
        <div className="bg-slate-300 pb-4">
            <img className="w-10 h-10 rounded-full mr-3 cursor-pointer box" src={prop.img} alt="user" />
        </div>
    )
    
}