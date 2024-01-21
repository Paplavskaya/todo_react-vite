import { Route, Routes } from "react-router-dom"
import { PostList } from "./PostList"
import { PostPage } from "./PostPage"

export const Post = () => 
    <Routes>
        <Route index element={<PostList />}/>
        <Route path="/:postId" element={<PostPage />}/>
    </Routes>
