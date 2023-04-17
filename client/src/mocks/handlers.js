import { rest } from "msw";

const handlers = [
  // 컨텐츠 목록을 가져오는 API
  rest.get("/api/post", (req, res, ctx) => {
    console.log("테스트");
    const { searchParams } = req.url;
    const category = searchParams.get("category");
    const theme = searchParams.get("theme");
    const keyword = searchParams.get("keyword");
    const pageNum = searchParams.get("pageNum");
    console.log(category, theme, keyword, pageNum);
    let newContents = [];
    if (!theme) {
      newContents = contents.filter((content) => {
        return content.category === category;
      });
    } else {
      newContents = contents.filter((content) => {
        return content.theme === theme;
      });
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: newContents,
      })
    );
  }),

  // 컨텐츠를 등록하는 API
  rest.post("/api/post", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),

  // 컨텐츠를 수정하는 API
  rest.put("/api/post", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),

  // 컨텐츠를 삭제하는 API
  rest.post("/api/post", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),

  // 메인 페이지 API
  rest.get("/api/follow", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),

  // 팔로우한 유저의 컨텐츠를 가져오는 API
  rest.get("/api/follow", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),
];

const category = ["recipe", "lifehack", "restaurant"];

const theme = [];

const contents = Array.from(Array(32).keys()).map((id) => ({
  id,
  title: `제목입니다 ${id}`,
  content: `내용입니다 ${id}`,
  category: category[Math.floor(Math.random() * category.length)],
  theme: theme[0],
  userId: id,
  userName: "",
}));



export default handlers;