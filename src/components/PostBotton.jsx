import { useCount } from "../hooks/useCount.js";

export function PostBotton(props) {

    const prop = props;
    
    const { count, state, changeCount } = useCount( prop.count, prop.state)

    return(
        <div className="cursor-pointer p-2" >
            <button onClick={changeCount}>
                <span className="p-1 rounded-full hover:bg-opacity-10 hover:bg-white">
                    {prop.img}
                </span>

                {
                    state
                    ?
                        <span className={`${prop.color}`}>
                            {count}
                        </span>
                    :
                        <span>
                            {count}
                        </span>
                }
        
            </button>
        </div>
    )

}