// eslint-disable-next-line react/prop-types
export function Background({children}) {
    return(
        <div className="text-2xl bg-slate-600 w-5/6 h-full flex overflow-y-scroll
            md:w-3/4
        ">
            {children}
        </div>
    )
}