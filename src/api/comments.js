// 댓글 js 파일
import { posts } from './index'

// 댓글 조회 API
function fetchComments(payload){
    return posts.get(`/api/comments?contentsId=${payload}`)
}

// 댓글 달기 API
function insertComments(contentsId, payload){
    return posts.post(`/api/${contentsId}/comment`,payload)
}

// 댓글 수정 API
function updateComments(contentsId,commentsId,payload){
    return posts.post(`/api/${contentsId}/comment/${commentsId}`, payload)
}

// 댓글 삭제 API
function deleteComments(contentsId,commentsId){
    return posts.delete(`/api/${contentsId}/comment/${commentsId}`)
}

export { fetchComments, insertComments, updateComments, deleteComments };