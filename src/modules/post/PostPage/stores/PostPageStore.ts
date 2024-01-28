import { makeAutoObservable, runInAction } from "mobx";
import { PostItem } from "../../models/PostItem";

export class PostPageStore {

    postDataState: PostItem | undefined = undefined;

    constructor() {
        makeAutoObservable(this)
    }

    loadPost = async (postId: string) => {
        try {
            const response = await fetch(`https://dummyjson.com/posts/${postId}`);
            const data: PostItem = await response.json();

            runInAction(()=>{this.postDataState = data})

        } catch(error) {
            console.log(error)
        }
    }
}