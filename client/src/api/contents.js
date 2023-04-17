// 컨텐츠 js 파일
import { posts } from './index'

// 컨텐츠 목록을 가져오는 API
function fetchContents(payload){
    const { category, theme, keyword, pageNum, userId, contentId } = payload;
    return posts.get(
      `/api/post?category=${category}&theme=${theme}&pageNum=${pageNum}&keyword=${keyword}&userId=${userId}&contentId=${contentId}`
    );
}

// 컨텐츠를 등록하는 API
function resistContents(payload){
    return posts.post(`/api/post`, payload)
}

// 컨텐츠를 수정하는 API
function modifyContents(payload) {
  return posts.put(`/api/post`, payload);
}

// 컨텐츠를 삭제하는 API
function removeContents(payload) {
  return posts.delete(`/api/post`, payload);
}

// 내가 작성한 컨텐츠를 조회하는 API
function fetchMyPost(userId){
  return posts.get(`/api/mypost?userId=${userId}`)
}

// 메뉴 => 메인 페이지 API (레시피, 생활팁, 맛집 인기 순으로 5개 씩 조회)
function fetchBestContents(category){
    return posts.get(`/api/best?category=${category}`);
}

// 검색 => 메인 페이지 API
// 레시피, 생활팁, 맛집 검색한 키워드에 해당되는 컨텐츠 인기 순으로 5개씩 조회
function fetchContentsSearch(payload){
    return posts.post('/api/search-contents', payload)
}




export {
  fetchBestContents,
  fetchContentsSearch,
  fetchContents,
  fetchMyPost,
  resistContents,
  modifyContents,
  removeContents,
};