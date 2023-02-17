// 팔로잉 js 파일
import { posts } from './index'

function fetchFollowingContents(payload){
    const { userId } = payload
    return posts.get(`/api/follow/${userId}`)
}

function insertFollowing(payload){
    const { accountIdx } = payload
    return posts.post(`/api/follow/${accountIdx}`,payload)
}

function deleteFollowing(payload){
    const { accountIdx } = payload
    return posts.post(`/api/follow/${accountIdx}`,payload)
}

export { fetchFollowingContents, insertFollowing, deleteFollowing }