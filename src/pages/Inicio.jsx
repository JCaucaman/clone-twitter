import { Post } from "../components/Post";
import { FormPost } from "../components/FormPost";

export function Inicio() {
  return(
    <div className="text-2xl bg-slate-600 w-5/6 md:w-3/4 h-full overflow-y-scroll">
      <div className="max-w-160 max-sm:max-w-96">
        <FormPost />
        <Post img="/imagen.jpg" />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post img="/imagen.jpg" />
        <Post img="/imagen.jpg" />
      </div>
    </div>
  )
}