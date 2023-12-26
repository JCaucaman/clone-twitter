export function Post() {
    return(
            <article className=" w-37 h-41 pr-4 pl-4 flex mt-4">
                <img className="w-10 h-10 rounded-full mr-3" src="../../public/photo-user.jpg" alt="user" />
                <div className="w-full">
                    <section>
                        <span>name-user</span>
                        <span>@user</span>
                        <span>00h</span>
                        <p>
                            text
                        </p>
                        <center>
                            <img className="rounded-xl max-w-128 max-h-128 "  src="../../public/imagen.jpg" alt="photo" />
                        </center>
                    </section>
                    <div className="flex justify-between ">
                        <button type="button">comentarios</button>
                        <button type="button">repost</button>
                        <button type="button">likes</button>
                    </div>
                </div>
            </article>
    )
}