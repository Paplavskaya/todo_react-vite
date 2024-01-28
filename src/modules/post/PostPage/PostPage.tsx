import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import './PostPage.css'
import { observer } from "mobx-react-lite";
import { PostPageStore } from "./stores/PostPageStore";

export const PostPage = observer(() => {
    const [store] = useState(()=> new PostPageStore());
    const {postDataState, loadPost} = store;
    const {postId} = useParams();

    const navigete = useNavigate();

    useEffect(()=>{
        if(postId) {
            loadPost(postId)
        }
    }, [postId])

    const hendleGoBackButtonClick = () => {
        // navigete('../../post') //возвращает с 'domen/post/1'
        navigete('..') //возвращает с предыдущего роута
    }

    const hendleNextPageClick = () => {
        navigete(`../${+postId! +1}`)
    }

    return <div className="conteiner">
        {postDataState && <div className="content">
                    <button className="back__btn" onClick={hendleGoBackButtonClick}>go back</button>
                    <h1 className="title">{postDataState.title}</h1>
                    <div className="body">{postDataState.body}</div>
                    <div className="tags">
                        {postDataState.tags.map((tag: string) => 
                            <div className='tag' 
                                key={tag}>
                            
                                #{tag}
                            </div>)}
                    </div>
                    <button className="nex-page" onClick={hendleNextPageClick}>nex-page</button>
            </div>}
    </div>
})