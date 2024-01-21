import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { PostItem } from "../models/PostItem";
import './PostPage.css'

export const PostPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState<PostItem>();
    const navigete = useNavigate();

    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${postId}`).
        then(response => response.json()).
        then((data: PostItem) => {
            setPost(data)
        })
    }, [postId])

    const hendleGoBackButtonClick = () => {
        // navigete('../../post') //возвращает с 'domen/post/1'
        navigete('..') //возвращает с предыдущего роута
    }

    const hendleNextPageClick = () => {
        navigete(`../${+postId! +1}`)
    }

    return <div className="conteiner">
        {post && <div className="content">
                    <button className="back__btn" onClick={hendleGoBackButtonClick}>go back</button>
                    <h1 className="title">{post.title}</h1>
                    <div className="body">{post.body}</div>
                    <div className="tags">
                        {post.tags.map((tag) => 
                            <div className='tag' 
                                key={tag}>
                            
                                #{tag}
                            </div>)}
                    </div>
                    <button className="nex-page" onClick={hendleNextPageClick}>nex-page</button>
            </div>}
    </div>
}