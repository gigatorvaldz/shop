import { PostI } from "../Types/defaultTypes";

export const getPagesCount = (totalPosts: number, limit: number) => {
    return Math.ceil(totalPosts / limit);
}

export const getPageArray = (pages: number) => {
    let res = []
    for (let i = 0; i < pages; i++) {
        res.push(i);
    }
    return res;
}

export const slicePostPages = (posts: Array<PostI>, limit: number) => {

    let activePosts = JSON.parse(JSON.stringify(posts));

    let pages = getPagesCount(activePosts.length, limit);
    let result = [];
    for (let i = 0; i < pages; i++) {
        let subPosts = activePosts.slice(limit * i, limit * i + limit);
        result[i] = [...subPosts];
    }
    return result;
}