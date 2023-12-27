export function PostBotton(props) {

    const prop = props

    return(
        <div className="cursor-pointer p-2">
            <span className="p-1 rounded-full hover:bg-opacity-10 hover:bg-white">
                {prop.img}
            </span>
            <span className={`hover:${prop.color}`}>
                {prop.count}
            </span>
        </div>
    )
}