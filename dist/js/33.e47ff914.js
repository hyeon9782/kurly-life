(self["webpackChunkvue2_kurly_life"]=self["webpackChunkvue2_kurly_life"]||[]).push([[33],{7695:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",[null==t.img||""==t.img?[e("div",{staticClass:"temporary-image"},[t._v(" 임시 이미지 ")])]:t._e(),null!=t.img&&""!=t.img?[e("div",{class:{height210:"210"===t.height,height460:"460"===t.height}},[e("img",{attrs:{src:t.img,alt:"잘못된 URL입니다.",width:"100%",height:"100%"}})])]:t._e()],2)},c=[],r={props:{img:{type:String,default:()=>""},height:{type:String,default:()=>"460"}}},n=r,a=i(1001),o=(0,a.Z)(n,s,c,!1,null,null,null),u=o.exports},2493:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"click-box"},[e("div",{staticClass:"like-box",on:{click:t.toggleLike}},[e("span",{staticClass:"material-symbols-outlined like",class:{click:t.activeLike}},[t._v(" favorite ")]),e("div",{staticClass:"like-num"},[t._v(" "+t._s(t.likeCnt)+" ")])]),e("div",{staticClass:"scrap-box",on:{click:t.toggleScrap}},[e("span",{staticClass:"material-symbols-outlined scrap",class:{click:t.activeScrap}},[t._v(" bookmark ")]),e("div",{staticClass:"scrap-num"},[t._v(" "+t._s(t.scrapCnt)+" ")])])])},c=[],r={props:{likeNum:{type:Number,default:()=>1},scrapNum:{type:Number,default:()=>1},contentsId:{type:String,default:()=>""}},data(){return{activeLike:!1,activeScrap:!1,likeCnt:0,scrapCnt:0}},created(){this.setCnt()},methods:{toggleLike(){this.activeLike?(this.activeLike=!1,this.likeCnt=this.likeCnt-1):(this.activeLike=!0,this.likeCnt=this.likeCnt+1)},toggleScrap(){this.activeScrap?(this.activeScrap=!1,this.scrapCnt=this.scrapCnt-1):(this.activeScrap=!0,this.scrapCnt=this.scrapCnt+1)},setCnt(){this.likeCnt=this.likeNum,this.scrapCnt=this.scrapNum}}},n=r,a=i(1001),o=(0,a.Z)(n,s,c,!1,null,"16a4fd2c",null),u=o.exports},5522:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-card"},[e("div",{staticClass:"content-image",on:{click:t.detail}},[e("AppImage",{attrs:{img:i(9300)(`./${t.item.image}`),height:"210"}})],1),e("div",{staticClass:"content-title"},[t._v(" "+t._s(t.item.title)+" ")]),e("div",[e("ClickBox",{attrs:{likeNum:t.item.like,scrapNum:t.item.scrap}})],1)])},c=[],r=i(2493),n=i(7695),a={components:{AppImage:n.Z,ClickBox:r.Z},props:{item:{type:Object,default:()=>({})},url:{type:String,default:()=>""},title:{type:String,default:()=>""},likeNum:{type:Number,default:()=>0},scrapNum:{type:Number,default:()=>0}},methods:{detail(){this.$router.push(`/contents/${this.item.contentsId}`)}}},o=a,u=i(1001),l=(0,u.Z)(o,s,c,!1,null,"59501a74",null),p=l.exports},6055:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-box"},["레시피"==t.category||"recipe"==t.category?t._l(t.recipeTheme,(function(i,s){return e("div",{key:s,staticClass:"theme-item",class:{select:s==t.active},on:{click:function(e){return t.searchContents(s,i)}}},[t._v(" "+t._s(i)+" ")])})):t._e(),"생활팁"===t.category||"lifehack"==t.category?t._l(t.lifehackTheme,(function(i,s){return e("div",{key:s,staticClass:"theme-item",class:{select:s==t.active},on:{click:function(e){return t.searchContents(s,i)}}},[t._v(" "+t._s(i)+" ")])})):t._e(),"맛집"===t.category||"restaurant"==t.category?t._l(t.restaurantTheme,(function(i,s){return e("div",{key:s,staticClass:"theme-item",class:{select:s==t.active},on:{click:function(e){return t.searchContents(s,i)}}},[t._v(" "+t._s(i)+" ")])})):t._e()],2)},c=[],r={data(){return{recipeTheme:["전체","저녁","간식","생일","야식","베이커리","초간단 요리","음료","아이들 간식"],lifehackTheme:["전체","요리","보관","정리","살림템","청소","기타"],restaurantTheme:["전체","한식","중식","일식","퓨전","이탈리안","프렌치"],selectTheme:"",active:0}},props:{category:{type:String,default:()=>""}},methods:{change(t){this.active=t},searchContents(t,e){this.change(t),"전체"==e&&(e=""),console.log(e),this.selectTheme=e,this.$store.dispatch("contents/searchContents",{pageNum:1,keyword:this.keyword,category:this.category,theme:this.selectTheme})}},created(){this.theme&&(this.active=this.recipeTheme.indexOf(this.theme))},computed:{keyword(){return this.$store.state.contents.keyword},theme(){return this.$route.params.theme}}},n=r,a=i(1001),o=(0,a.Z)(n,s,c,!1,null,"17eed88c",null),u=o.exports},7033:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contents-container"},[e("ContentsTheme",{attrs:{category:this.$route.params.category,select:""}}),e("div",{staticClass:"card-container"},[null==t.itemList||0==t.itemList.length?[e("NoData")]:t._l(t.itemList,(function(t,i){return e("ContentsCard",{key:i,attrs:{item:t}})}))],2)],1)},c=[],r=i(6055),n=i(5522),a={components:{ContentsTheme:r.Z,ContentsCard:n.Z},watch:{$route:"test"},created(){this.test()},methods:{searchRecipe(){this.$store.dispatch("contents/searchContents",{pageNum:"",searchText:"",category:"",theme:"",userId:""})},test(){this.$route.params.category}},computed:{recipeList(){return this.$store.state.contents.recipeList}},data(){return{selectTheme:"",itemList:[{url:"",title:"테스트 제목입니다.",likeNum:3,scrapNum:6},{url:"",title:"테스트 제목입니다.",likeNum:3,scrapNum:6},{url:"",title:"테스트 제목입니다.",likeNum:3,scrapNum:6},{url:"",title:"테스트 제목입니다.",likeNum:3,scrapNum:6},{url:"",title:"테스트 제목입니다.",likeNum:3,scrapNum:6},{url:"",title:"테스트 제목입니다.",likeNum:3,scrapNum:6}]}}},o=a,u=i(1001),l=(0,u.Z)(o,s,c,!1,null,"24d6cc30",null),p=l.exports},9300:function(t,e,i){var s={"./beef.jpg":9528,"./carrots.jpg":751,"./chicken.jpg":1920,"./cookies.jpg":5879,"./onion.jpg":3542,"./pasta.jpg":9206,"./pork.jpg":729,"./pumpkin-soup.jpg":2213};function c(t){var e=r(t);return i(e)}function r(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}c.keys=function(){return Object.keys(s)},c.resolve=r,t.exports=c,c.id=9300},9528:function(t,e,i){"use strict";t.exports=i.p+"img/beef.1c8ee44f.jpg"},751:function(t,e,i){"use strict";t.exports=i.p+"img/carrots.a645e716.jpg"},1920:function(t,e,i){"use strict";t.exports=i.p+"img/chicken.6ec4c08f.jpg"},5879:function(t,e,i){"use strict";t.exports=i.p+"img/cookies.d7a18930.jpg"},3542:function(t,e,i){"use strict";t.exports=i.p+"img/onion.86f5849b.jpg"},9206:function(t,e,i){"use strict";t.exports=i.p+"img/pasta.1bac1394.jpg"},729:function(t,e,i){"use strict";t.exports=i.p+"img/pork.2bed555e.jpg"},2213:function(t,e,i){"use strict";t.exports=i.p+"img/pumpkin-soup.b15f4979.jpg"}}]);
//# sourceMappingURL=33.e47ff914.js.map