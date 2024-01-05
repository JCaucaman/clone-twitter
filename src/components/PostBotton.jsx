import { useState } from "react";

export function PostBotton(props) {

    const prop = props;
    
    const [count, setCount] = useState(prop.count);
    const [state, setState] = useState(prop.state);

    const useCount = () => {
        if(state){
            setCount(count - 1);
            setState(false);
        } else {
            setCount(count + 1);
            setState(true);
        }
    };

    return(
        <div className="cursor-pointer p-2" >
            <button onClick={useCount}>
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