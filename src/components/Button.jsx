export function Button(props) {
    
    const prop = props;
    return(
        <button type="submit" className=" bg-cyan-400  pl-4 pr-4 rounded-full hover:bg-cyan-500">
            <span className=" w-8 text-white font-semibold text-xl">
                {prop.text}
            </span>
        </button>
    )

}