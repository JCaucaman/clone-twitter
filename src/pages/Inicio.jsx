import { useEffect, useState } from "react";

import { Post } from "../components/Post";
import { FormPost } from "../components/FormPost";
import { Feed } from "../components/Feed.jsx";
import { Background } from "../components/Background.jsx";

export function Inicio() {

  const POSTS_API = "https://localhost:3000"

  const [fact, setfact] = useState()

  useEffect(() => {
    fetch(POSTS_API)
      .then( res => {
        if(!res.ok) throw new Error('Error fecting fact')
        return res.json()
      })
      .then(data =>{
        const { fact } = data;
        setfact(fact)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])


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
        />
      </Feed>
    </Background>
  )
}