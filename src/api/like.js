// 스크랩 js 파일
import { posts } from "./index";

// 좋아요 하는 API
function insertLike(payload){
    return posts.post('/api/like',payload)
}

// 좋아요를 취소하는 API
function removeLike(payload){
    return posts.delete('/api/like',payload)
}

export { insertLike, removeLike };
