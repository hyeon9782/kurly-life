// 스크랩 js 파일
import { posts } from "./index";

// 스크랩한 컨텐츠 목록을 가져오는 API
function fetchScrapContents(payload) {
  const { category, userId, pageNum } = payload;
  return posts.get(
    `/api/scrap?userId=${userId}&category=${category}&page=${pageNum}`
  );
}

// 스크랩 하는 API
function insertScrap(payload) {
  return posts.post("/api/scrap", payload);
}

// 스크랩 취소하는 API
function removeScrap(payload) {
  return posts.delete("/api/scrap", payload);
}

export {
  fetchScrapContents,
  insertScrap,
  removeScrap,
};
