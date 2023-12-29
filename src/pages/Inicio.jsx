import { Post } from "../components/Post";
import { FormPost } from "../components/FormPost";
import { Feed } from "../components/Feed.jsx";
import { Background } from "../components/Background.jsx";

export function Inicio() {
  return(
    <Background>
      <Feed>
        <FormPost />
        <Post
          img="/imagen.jpg" 
          text="Lorem"
        />
        <Post 
          text="Lorem"
        />
        <Post
          img="/imagen.jpg" 
          text="Lorem"
        />
        <Post
          img="/imagen.jpg" 
          text="Lorem"
        />
      </Feed>
    </Background>
  )
}