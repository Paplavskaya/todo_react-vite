import { makeAutoObservable, runInAction } from "mobx";
import { PostListData } from "../models/PostListData";

class PostListStore {

    postListDataState: PostListData | undefined = undefined;
    awaiting: boolean = false

    get postsData () {
        return this.postListDataState?.posts
    }

    constructor() {
        makeAutoObservable(this)
    }

    loadingData = async () => {
        try {
            runInAction(() => {this.awaiting = true}) 
            const response = await fetch('https://dummyjson.com/posts');
            if(response.status === 200) {
                const data: PostListData = await response.json();
                runInAction(() => {this.postListDataState = data})
            }
        } catch (error) {
            console.error(error)
        } finally {
            runInAction(() => {this.awaiting = false}) 
        }
    }
}

export const storePost = new PostListStore();