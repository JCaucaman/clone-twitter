import { Route, Routes } from "react-router-dom";

// Pages
import { Inicio } from "./pages/Inicio.jsx";
import { Profile } from "./pages/Profile.jsx";
import { NotFound } from "./pages/NotFound.jsx";

// components
import { Header } from "./components/Header.jsx";
import { PostsWithReplies } from "./components/PostsWithReplies.jsx";
import { PostsWithLikes } from "./components/PostsWithLikes.jsx";
import { PostsMyAll } from "./components/PostsMyAll.jsx";

export default function App() {
  return (
    <>
      <div className="flex w-full h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/profile" element={<Profile />} >
            
            <Route index element={<PostsMyAll/>} />
            <Route path="likes" element={<PostsWithLikes />}  />
            <Route path="with_replies" element={<PostsWithReplies />}  />
            
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}