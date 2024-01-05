import { PostBotton } from "./PostBotton";
import { UserImg } from "./UserImg";

export function Post(props) {

    const prop = props;

    var isImg = true;

    if(!prop.img){
        isImg = false;
    }

    var isText = true;

    if(!prop.text){
        isText = false;
    }


    return(
        <article className="h-min pr-4 pl-4 flex pt-4 bg-green-900
        max-sm:max-h-166 
        max-sm:bg-green-100"
        >
            <UserImg img="/photo-user.jpg" />
            <div className="w-full text-base text-white bg-yellow-400">
                <section>
                    <span className="text-white font-semibold hover:underline cursor-pointer bg-emerald-300">name-user</span>
                    <span className="text-zinc-500 bg-emerald-400 cursor-pointer">@user</span>
                    <span className="text-zinc-500 pl-1 pr-1 bg-emerald-200" >·</span> 
                    <span className="text-zinc-500 hover:underline bg-emerald-100 cursor-pointer">00h</span>
                    
                    {
                        isText
                        ?   
                            <p className="max-w-128 pb-3 bg-indigo-600">
                                {prop.text}
                            </p>
                        :
                            <></>
                    }
                    {
                        isImg
                        ?   
                            <div className=" max-h-128">
                                <img className="rounded-xl max-h-128" src={prop.img}/>
                            </div>
                        :
                            <></>
                    }
                </section>
                <div className="flex text-lg bg-pink-800 justify-between 
                md:max-w-96 
                lg:max-w-128 
                sm:max-w-100"
                >
                    <PostBotton img="🗨️" count={0} state={false} color="text-cyan-600" />
                    <PostBotton img="♻️" count={0} state={false} color="text-green-600" />
                    <PostBotton img="❤️" count={1} state={true} color="text-red-600" />
                </div>
            </div>
        </article>
    )
}