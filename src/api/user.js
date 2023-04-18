// 유저 js 파일
import { posts } from './index'

// 유저 API
function user(payload){
    return posts.post('/api/user',payload)
}


export { user }