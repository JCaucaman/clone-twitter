import { Post } from "../components/Post";

export function Inicio() {
  return(
    <div className="text-2xl bg-slate-600 w-5/6 md:w-3/4 h-full overflow-y-scroll">
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
  )
}