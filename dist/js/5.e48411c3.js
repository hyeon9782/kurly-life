"use strict";(self["webpackChunkvue2_kurly_life"]=self["webpackChunkvue2_kurly_life"]||[]).push([[5],{2227:function(t,e,s){s.d(e,{Z:function(){return r}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reply-input-box"},[e("input",{staticClass:"reply-input",attrs:{type:"text",placeholder:"댓글을 남겨주세요."}}),e("div",{staticClass:"insert-btn",on:{click:t.insertReply}},[t._v("등록")])])},i=[],a={methods:{insertReply(){console.log("dd")}}},l=a,o=s(1001),c=(0,o.Z)(l,n,i,!1,null,"197bee2e",null),r=c.exports},9006:function(t,e,s){s.d(e,{Z:function(){return r}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comments-item"},[e("div",{staticClass:"comments-img"},[e("div",{staticClass:"user-img-box",on:{click:t.movePage}},[e("img",{attrs:{src:t.userImg,alt:"x",width:"100%"}})])]),e("div",{staticClass:"comments-contents"},[e("div",{staticClass:"user-name"},[t._v(" "+t._s(t.comment.nickname)+" ")]),e("div",{staticClass:"content"},[t._v(" "+t._s(t.comment.content)+" ")]),e("div",{staticClass:"sub-box"},[e("div",{staticClass:"uploadDate"},[t._v(" "+t._s(t.uploadDate)+" ")]),t._e(),t.isReply?t._e():e("div",{staticClass:"reply",on:{click:t.reply}},[t._v(" 답글 달기 ")])])])])},i=[],a={props:{comment:{type:Object,default:()=>({})},isReply:{type:Boolean,default:()=>!1},userImg:{type:String,default:()=>""},userId:{type:String,default:()=>"2154"},nickname:{type:String,default:()=>"노른자있는계란"},content:{type:String,default:()=>"이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑 속에 든 칼이다 청춘의 끓는 피가 아니더면 인간이 얼마나 쓸쓸하랴?"},uploadDate:{type:String,default:()=>"2022-08-20"},likeNum:{type:Number,default:()=>0},commentsId:{type:String,default:()=>"3214521"}},methods:{movePage(){this.$router.push(`/mypage/${this.userId}`)},reply(){this.$router.push(`/reply/${this.commentsId}`)}}},l=a,o=s(1001),c=(0,o.Z)(l,n,i,!1,null,"0caaf0b2",null),r=c.exports},9005:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comments-page"},[e("div",{staticClass:"comments-container"},t._l(t.comments,(function(t,s){return e("CommentsItem",{key:s,attrs:{comment:t}})})),1),e("CommentsInput")],1)},i=[],a=s(2227),l=s(9006),o={components:{CommentsItem:l.Z,CommentsInput:a.Z},methods:{getComments(){this.$store.dispatch("contents/fetchComments",this.$route.params.contentsId)}},created(){this.getComments()},computed:{comments(){return this.$store.state.contents.comments}}},c=o,r=s(1001),u=(0,r.Z)(c,n,i,!1,null,null,null),m=u.exports}}]);
//# sourceMappingURL=5.e48411c3.js.map