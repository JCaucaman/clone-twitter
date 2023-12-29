// eslint-disable-next-line react/prop-types
export function Background({children}) {
    return(
        <div className="text-2xl bg-slate-600 w-5/6 md:w-3/4 h-full overflow-y-scroll">
            {children}
        </div>
    )
}