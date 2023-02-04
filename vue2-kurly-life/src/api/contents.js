// 컨텐츠 js 파일
import { posts } from './index'

// 컨텐츠 목록을 가져오는 API
function fetchContents(payload){
    const { category, theme, keyword, pageNum } = payload
    return posts.get(`/api/post/${category}?theme=${theme}&pageNum=${pageNum}&keyword=${keyword}`)
}

// 스크랩한 컨텐츠 목록을 가져오는 API
function fetchScrapContents(payload){
    const { category, userId, pageNum } = payload
    return posts.get(`/api/scrap/${userId}?categoryType=${category}&page=${pageNum}`)
}

// 사용자가 작성한 컨텐츠 목록을 가져오는 API
function fetchUserContents(payload){
    const { category, userId, pageNum } = payload
    return posts.get(`/api/user/${userId}?categoryType=${category}&page=${pageNum}`)
}

// 메뉴 => 메인 페이지 API (레시피, 생활팁, 맛집 인기 순으로 5개 씩 조회)
function fetchMainContents(payload){
    const { accountIdx } = payload
    return posts.get(`/api/post?${accountIdx}`)
}






// 검색 => 메인 페이지 API
// 레시피, 생활팁, 맛집 검색한 키워드에 해당되는 컨텐츠 인기 순으로 5개씩 조회
function fetchContentsSearch(payload){
    return posts.post('/api/search-contents', payload)
} 



// 특정 테마의 컨텐츠를 가져오는 API
function fetchContentsWithTheme(payload){
    return posts.post('/api/contents-theme', payload)
}

// 게시글 상세페이지 API
function detailContents(payload){
    return posts.post('/api/detail-contents',payload)
}


// 좋아요 하는 API
function insertLike(payload){
    return posts.post('/api/insert-like',payload)
}

// 좋아요를 취소하는 API
function removeLike(payload){
    return posts.post('/api/remove-like',payload)
}




// 스크랩 하는 API
function insertScrap(payload){
    return posts.post('/api/insert-scrap',payload)
}

// 스크랩 취소하는 API
function removeScrap(payload){
    return posts.post('/api/remove-scrap',payload)
}

export { fetchMainContents, detailContents, fetchContentsSearch, fetchContents, fetchContentsWithTheme, insertLike, removeLike, fetchScrapContents, insertScrap, removeScrap, fetchUserContents  }