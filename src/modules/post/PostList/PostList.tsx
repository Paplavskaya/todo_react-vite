import { useEffect} from "react"
import './PostList.css'
import { Link } from "react-router-dom"
import { storePost } from "./stores/PostListStore"
import { observer } from "mobx-react-lite"

export const PostList = observer(() => {

    const {loadingData, postsData, awaiting} = storePost;
    
    useEffect(()=>{
        loadingData()
    }, [])

    if(awaiting) {
        return <h2 className="loading">Loading...</h2>
    }
    
    return <>
        {postsData && postsData.length > 0 && postsData.map((shortPost) =>
                <div className='post__item' key={shortPost.id}>
                    <div className="post__number">{shortPost.id}</div>
                    <div className="post__title">
                        <Link to={`/post/${shortPost.id}`}>{shortPost.title}</Link>
                    </div>
                </div>)}
    </>
})