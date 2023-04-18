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
function registContents(payload){
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

// contentsId로 컨텐츠를 조회하는 API
function fetchContentsWithContentsId(contentsId){
  return posts.get(`/api/post/${contentsId}`);
}

// 내가 작성한 컨텐츠를 조회하는 API
function fetchMyPost(userId){
  return posts.get(`/api/mypost?userId=${userId}`)
}

// 좋아요 수가 많은 컨텐츠 5개를 조회하는 API
function fetchBestContents(category){
    return posts.get(`/api/best?category=${category}`);
}




export {
  fetchBestContents,
  fetchContentsWithContentsId,
  fetchContents,
  fetchMyPost,
  registContents,
  modifyContents,
  removeContents,
};