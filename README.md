# 컬리의 일상

## Project Description
- 컬리 헤커톤에서 개발했던 컬리 사용자들이 이용하는 커뮤니티 프로젝트입니다.

## Directory Structure
```
src
 ┣ api
 ┃ ┣ common
 ┃ ┃ ┗ interceptors.js
 ┃ ┣ bulletin.js
 ┃ ┣ comments.js
 ┃ ┣ contents.js
 ┃ ┣ following.js
 ┃ ┣ index.js
 ┃ ┣ like.js
 ┃ ┣ products.js
 ┃ ┣ scrap.js
 ┃ ┗ user.js
 ┣ assets
 ┃ ┣ image
 ┃ ┃ ┣ beef.jpg
 ┃ ┃ ┣ carrots.jpg
 ┃ ┃ ┣ chicken.jpg
 ┃ ┃ ┣ cookies.jpg
 ┃ ┃ ┣ onion.jpg
 ┃ ┃ ┣ pasta.jpg
 ┃ ┃ ┣ pork.jpg
 ┃ ┃ ┗ pumpkin-soup.jpg
 ┃ ┗ kurly-logo.jpg
 ┣ components
 ┃ ┣ comments
 ┃ ┃ ┣ CommentsInput.vue
 ┃ ┃ ┣ CommentsItem.vue
 ┃ ┃ ┣ CommentsPage.vue
 ┃ ┃ ┗ CommentsReply.vue
 ┃ ┣ common
 ┃ ┃ ┣ AppFooter.vue
 ┃ ┃ ┣ AppHeader.vue
 ┃ ┃ ┣ AppHeaderNav.vue
 ┃ ┃ ┣ AppImage.vue
 ┃ ┃ ┣ AppNav.vue
 ┃ ┃ ┣ AppPanel.vue
 ┃ ┃ ┣ AppSlide.vue
 ┃ ┃ ┣ AppTiptap.vue
 ┃ ┃ ┣ ClickBox.vue
 ┃ ┃ ┣ EditorTiptap.vue
 ┃ ┃ ┣ InfiniteScroll.vue
 ┃ ┃ ┣ NoData.vue
 ┃ ┃ ┣ ScrollUp.vue
 ┃ ┃ ┣ SubHeader.vue
 ┃ ┃ ┣ VueEditor.vue
 ┃ ┃ ┗ VueSlide.vue
 ┃ ┣ contents
 ┃ ┃ ┣ ContentsCard.vue
 ┃ ┃ ┣ ContentsCardMini.vue
 ┃ ┃ ┣ ContentsDetail.vue
 ┃ ┃ ┣ ContentSlide.vue
 ┃ ┃ ┣ ContentSlideBox.vue
 ┃ ┃ ┣ ContentsList.vue
 ┃ ┃ ┣ ContentsTheme.vue
 ┃ ┃ ┗ ThemeSlide.vue
 ┃ ┣ event
 ┃ ┃ ┣ EventCard.vue
 ┃ ┃ ┗ EventSlide.vue
 ┃ ┣ following
 ┃ ┃ ┣ FollowBtn.vue
 ┃ ┃ ┗ FollowingCard.vue
 ┃ ┣ product
 ┃ ┃ ┣ ProductCard.vue
 ┃ ┃ ┗ ProductSlide.vue
 ┃ ┗ user
 ┃ ┃ ┣ UserBox.vue
 ┃ ┃ ┣ UserContent.vue
 ┃ ┃ ┗ UserImage.vue
 ┣ json
 ┃ ┗ contents.json
 ┣ mocks
 ┃ ┣ browser.js
 ┃ ┗ handlers.js
 ┣ router
 ┃ ┗ index.js
 ┣ store
 ┃ ┣ contents.js
 ┃ ┣ following.js
 ┃ ┣ index.js
 ┃ ┗ user.js
 ┣ utils
 ┃ ┣ cookies.js
 ┃ ┗ validation.js
 ┣ views
 ┃ ┣ ContentsPage.vue
 ┃ ┣ FollowingPage.vue
 ┃ ┣ LifehackPage.vue
 ┃ ┣ MainPage.vue
 ┃ ┣ MyPage.vue
 ┃ ┣ MyPostPage.vue
 ┃ ┣ NotFoundPage.vue
 ┃ ┣ RecipePage.vue
 ┃ ┣ RegistPage.vue
 ┃ ┣ RestaurantPage.vue
 ┃ ┣ ScrapPage.vue
 ┃ ┣ SearchMainPage.vue
 ┃ ┗ SearchPage.vue
 ┣ App.vue
 ┗ main.js
```

## Project Information
## Getting Started / Installation
### Install Dependencies

    npm install

### Run in Development Environment

    npm run serve

## Tech Stack
### Client
- JavaScript
- Vue
- vue-router
- Vuex

## Project Results
- 포스팅 조회 기능
- 포스팅 검색 기능
- 포스팅 등록 기능