// 프로덕트 js 파일
import { posts } from './index'

// 검색한 키워드가 포함된 상품을 가져오는 API
function fetchProducts(){
    return posts.get('/api/products')
}

export { fetchProducts };