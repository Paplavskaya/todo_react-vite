import { PostItem } from "../../models/PostItem"

export type PostListData = {
    total: number,
    skip: number,
    limit: number,
    posts: PostItem[]
}

