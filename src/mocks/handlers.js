import { rest } from "msw";

const handlers = [
  // 컨텐츠 목록을 가져오는 API
  rest.get("/api/post", (req, res, ctx) => {
    console.log("테스트");
    const { searchParams } = req.url;
    const category = searchParams.get("category");
    const theme = searchParams.get("theme");
    const keyword = searchParams.get("keyword");
    const pageNum = Number(searchParams.get("pageNum"));
    console.log(category, "theme : " + theme, keyword, pageNum);
    let newContents = [];
    if (!keyword && !theme) {
      newContents = contents.filter((content) => {
        return content.category === category;
      });
      console.log("여기4");
    } else if (theme){
      newContents = contents.filter((content) => {
        return content.theme === theme;
      });
      console.log("여기3");
    } else if (keyword && !category){
      newContents = contents.filter((content) => {
        return content.title.includes(keyword);
      });
      console.log("여기2");
    } else {
      newContents = contents.filter((content) => {
        return content.category === category
      });
      newContents = newContents.filter((content) => {
        return content.title.includes(keyword);
      });
      console.log("여기1");
    }

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        data: newContents.slice(pageNum * 6, (pageNum + 1) * 6),
      })
    );
  }),

  // 컨텐츠를 등록하는 API
  rest.post("/api/post", (req, res, ctx) => {
    console.log(req.body);
    // const { category, } = req.body;
    contents.push(req.body);
    console.log(contents);
    return res(ctx.status(200));
  }),

  // 컨텐츠를 수정하는 API
  rest.put("/api/post", (req, res, ctx) => {
    const contentsId = Number(req.url.searchParams.get("contentsId"));
    
    contents.map((content) => {
      if (content.contentsId === contentsId) {
        content.content = content;
      }
    });
    console.log(contents);
    return res(ctx.status(200));
  }),

  // 컨텐츠를 삭제하는 API
  rest.post("/api/post", (req, res, ctx) => {
    const contentsId = Number(req.url.searchParams.get("contentsId"));
    contents = contents.filter((content) => content.contentsId !== contentsId);
    console.log(contents);
    return res(ctx.status(200));
  }),

  // 베스트 컨텐츠 API
  rest.get("/api/best", (req, res, ctx) => {
    const { searchParams } = req.url;
    console.log("테스트");
    const category = searchParams.get("category");
    const newContents = contents.filter((content) => {
      return content.category === category;
    });
    return res(
      ctx.status(200),
      ctx.json({
        data: newContents.slice(0, 5),
      })
    );
  }),

  // 컨텐스 상세페이지
  rest.get("/api/post/:contentsId", (req, res, ctx) => {
    const contentsId = Number(req.params.contentsId);
    let newContents = {};
    contents.map((content) => {
      if (content.contentsId === contentsId) {
        newContents = content;
      }
    })
    console.log(contentsId);
    console.log(newContents);
    return res(ctx.status(200), ctx.json(newContents));
  }),

  // 내가 작성한 컨텐츠를 가져오는 API
  rest.get("/api/mypost", (req, res, ctx) => {
    console.log("테스트");
    const userId = Number(req.url.searchParams.get("userId"));
    const category = req.url.searchParams.get("category");

    let newContents = [];
    if (category) {
      console.log("테스트 1");
      newContents = contents.filter((content) => {
        return content.userId === userId && content.category === category;
      });
    } else {
      console.log("테스트 2");
      newContents = contents.filter((content) => {
        return content.userId === userId;
      });
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: newContents,
      })
    );
  }),

  // 팔로우한 유저의 컨텐츠를 가져오는 API
  rest.get("/api/follow", (req, res, ctx) => {
    const userId = Number(req.url.searchParams.get("userId"));
    const category = req.url.searchParams.get("category");

    let newContents = [];
    if (category) {
      console.log("테스트 1");
      newContents = contents.filter((content) => {
        return content.scrap === userId && content.category === category;
      });
    } else {
      console.log("테스트 2");
      newContents = contents.filter((content) => {
        return content.scrap === userId;
      });
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: newContents,
      })
    );
  }),

  // 스크랩한 유저의 컨텐츠를 가져오는 API
  rest.get("/api/scrap", (req, res, ctx) => {
    const userId = Number(req.url.searchParams.get("userId"));
    const category = req.url.searchParams.get("category");
    let newContents = [];
    if (category) {
      console.log("테스트 1");
      newContents = contents.filter((content) => {
        return content.scrap === userId && content.category === category
      })
    } else {
      console.log("테스트 2");
      newContents = contents.filter((content) => {
        return content.scrap === userId;
      });
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: newContents,
      })
    );
  }),

  // 댓글 조회 API
  rest.get("/api/comments", (req, res, ctx) => {
    console.log("테스트");
    const contentsId = Number(req.url.searchParams.get("contentsId"))
    console.log(contentsId);
    const newComments = comments.filter(comment => {
      return comment.contentsId = contentsId
    })
    return res(
      ctx.status(200),
      ctx.json({
        data: newComments,
      })
    );
  }),

  // 댓글 등록 API
  rest.post("/api/comments", (req, res, ctx) => {
    console.log(req.body);
    comments.push(req.body)
    console.log(comments);
    return res(
      ctx.status(200)
    )
  }),

  // 댓글 수정 API
  rest.put("/api/comments", (req, res, ctx) => {
    const commentId = Number(req.url.searchParams.get("commentId"));
    const content = Number(req.url.searchParams.get("content"));
    comments.map(comment => {
      if (comment.commentId === commentId) {
        comment.content = content
      }
    })
    console.log(comments);
    return res(
      ctx.status(200)
    )
  }),

  // 댓글 삭제 API
  rest.delete("/api/comments", (req, res, ctx) => {
    const commentId = Number(req.url.searchParams.get("commentId"));
    comments = comments.filter((comment) => comment.commentId !== commentId);
    console.log(comments);
    return res(
      ctx.status(200)
    )
  }),

  // 상품 조회 API
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: products,
      })
    );
  })
];

const categoryThemes = {
  recipe: [
    "저녁",
    "간식",
    "생일",
    "야식",
    "베이커리",
    "초간단 요리",
    "음료",
    "아이들 간식",
  ],
  lifehack: ["요리", "보관", "정리", "살림템", "청소", "기타"],
  restaurant: ["한식", "중식", "일식", "퓨전", "이탈리안", "프렌치"],
};

const users = [
  {
    userId: 0,
    profile: "",
    nickname: "노른자없는계란",
  },
  {
    userId: 1,
    profile: "",
    nickname: "흰자없는계란",
  },
  {
    userId: 2,
    profile: "",
    nickname: "계란없는노른자",
  },
  {
    userId: 3,
    profile: "",
    nickname: "계란없는흰자",
  },
];

let contents = Array.from(Array(99).keys()).map((contentsId) => {
  const category = ["recipe", "lifehack", "restaurant"][
    Math.floor(Math.random() * 3)
  ];
  const theme =
    categoryThemes[category][
      Math.floor(Math.random() * categoryThemes[category].length)
    ];
  const { userId, nickname } = users[Math.floor(Math.random() * 4)];
  return {
    contentsId,
    title: `${category} ${theme} 제목 ${contentsId}`,
    content: `<h1>${theme} 내용 ${contentsId}</h1>`,
    category,
    theme,
    keyword: "",
    ingredient: "",
    like: Math.floor(Math.random() * 10),
    userId,
    nickname,
    localKeyword: "",
    scrap: Math.floor(Math.random() * 3),
  };
});

let comments = Array.from(Array(32).keys()).map((commentId) => ({
  commentId,
  content: `댓글 내용입니다. ${commentId}`,
  contentsId: Math.floor(Math.random() * 10)
}));


const products = Array.from(Array(5).keys()).map((productId) => ({
  productId,
  productName: `상품 이름 ${productId}`,
  productPrice: 19000,
  discount: 10
}));



export default handlers;