import { PostBotton } from "./PostBotton";

export function Post(props) {

    const prop = props;

    return(
        <article className="max-w-160 h-min pr-4 pl-4 flex pt-4 bg-green-900
        max-sm:max-w-96
        max-sm:max-h-166 
        max-sm:bg-green-100"
        >
            <img className="w-10 h-10 rounded-full mr-3 cursor-pointer" src="/photo-user.jpg" alt="user" />
            <div className="w-full text-base text-white bg-yellow-400">
                <section>
                    <span className="text-white font-semibold hover:underline cursor-pointer bg-emerald-300">name-user</span>
                    <span className="text-zinc-500 bg-emerald-400 cursor-pointer">@user</span>
                    <span className="text-zinc-500 pl-1 pr-1 bg-emerald-200" >·</span> 
                    <span className="text-zinc-500 hover:underline bg-emerald-100 cursor-pointer">00h</span>
                    <p className="max-w-128 pb-3 bg-indigo-600">
                        cLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum iste consectetur amet vero! Quisquam officiis optio aut neque facere, repellendus sed, animi consequatur offi
                    </p>
                    <div className=" max-h-128">
                        <img className="rounded-xl max-h-128" src={prop.img}/>
                    </div>
                </section>
                <div className="flex text-lg bg-pink-800 justify-between 
                md:max-w-96 
                lg:max-w-128 s
                m:max-w-100"
                >
                    <PostBotton img="🗨️" color="text-cyan-600" />
                    <PostBotton img="♻️" color="text-green-600" />
                    <PostBotton img="❤️" color="text-red-600" />
                </div>
            </div>
        </article>
    )
}