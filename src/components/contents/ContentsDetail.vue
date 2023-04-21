<template>
  <div class="content-detail">
    <div class="title-box">
      {{ detail.title }}
    </div>
    <div class="detail-head">
      <UserBox uploadDate="2022-08-20" :nickname="detail.nickname" :userId="detail.userId"/>
      <div class="btn-box">
        <FollowBtn />
      </div>
    </div>
    <div class="content-section" v-html="`${detail.content}`"></div>
    <div class="click-section">
      <ClickBox />
    </div>
    <div class="user-section">
      <div class="user-box">
        <UserBox />
        <div class="btn-box">
          <FollowBtn />
        </div>
      </div>
      <div class="user-introduce">
        {{ introduce }}
      </div>
    </div>
    <div class="comments-section">
      <div class="contents-box">
        <CommentsItem v-for="(comment, idx) in comments" :key="idx" :item="comment"/>
      </div>
      <div class="full-view" @click="commentsFullView" v-if="comments.length !== 0">
        전체 댓글 보기 >
      </div>
    </div>
    <div class="product-section">
      <div class="product-title">
        요리에 사용된 재료
      </div>
      <ProductSlide :products="products" />
    </div>
    <div class="recipe-section">
      <div class="recipe-title">
        같은 재료, 다른 음식
      </div>
      <div class="card-box">
        <ContentsCard v-for="(recipe, idx) in recipeList" :key="idx" :item="recipe"/>
      </div>
    </div>
    <ScrollUp />
  </div>
</template>

<script>
import CommentsItem from '@/components/comments/CommentsItem.vue';
import ClickBox from '@/components/common/ClickBox.vue';
import ContentsCard from '@/components/contents/ContentsCard.vue';
import FollowBtn from '@/components/following/FollowBtn.vue';
import UserBox from '@/components/user/UserBox.vue';
import ProductSlide from '@/components/product/ProductSlide.vue';
import ScrollUp from '@/components/common/ScrollUp.vue';
export default {
  methods:{
    commentsFullView(){
      this.$router.push(`/comments/${this.$route.params.contentsId}`)
    },
    getDetailContents(){
      this.$store.dispatch('contents/fetchDetailContents', this.$route.params.contentsId)
    },
    // getDetailComments(){
    //   this.$store.dispatch('contents/fetchDetailComments', this.$route.params.contentsId)
    // }
  },
  computed:{
    detail(){
      return this.$store.state.contents.detail
    },
    products(){
      return this.$store.state.contents.products
    },
    comments(){
      return this.$store.state.contents.comments
    }
  },
  created(){
    this.getDetailContents()
    // this.getDetailComments()
  },
  data(){
    return{
      title: "",
      content: "",
      nickname: "노른자없는계란",
      uploadDate: "2022-08-20",
      userId: "312",
      myId: "312",
      introduce: "낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상!",
      recipeList:[
        {
          img: "",
          title: "감자 쥬스 만들기 1",
          likeNum: 23,
          scrapNum: 13
        },
        {
          img: "",
          title: "감자 쥬스 만들기 2",
          likeNum: 23,
          scrapNum: 13
        },
        {
          img: "",
          title: "감자 쥬스 만들기 3",
          likeNum: 23,
          scrapNum: 13
        },
        {
          img: "",
          title: "감자 쥬스 만들기 4",
          likeNum: 23,
          scrapNum: 13
        },
        {
          img: "",
          title: "감자 쥬스 만들기 5",
          likeNum: 23,
          scrapNum: 13
        },
        {
          img: "",
          title: "감자 쥬스 만들기 6",
          likeNum: 23,
          scrapNum: 13
        },
      ],
    }
  },
  components:{
    ProductSlide,
    FollowBtn,
    UserBox,
    ScrollUp,
    ContentsCard,
    ClickBox,
    CommentsItem
  }
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 32px !important;  /* 또는 다른 크기를 지정하세요 */
}
.content-detail{
  width: 480px;
  .title-box{
    font-size: 28px;
    font-weight: bold;
    padding: 20px;
    line-height: 40px;
  }
  .detail-head{
    display: flex;
    justify-content: space-between;
    padding: 0px 20px 15px 20px;
    border-bottom: 2px solid gray;
    .btn-box{
      display: flex;
      align-items: center;
    }
  }
  .content-section{
    padding: 20px;
  }

  .click-section{
    border-bottom: 2px solid gray;
    padding: 20px;
  }

  .user-section{
    padding: 20px;
    .user-box{
      display: flex;
      justify-content: space-between;
      .btn-box{
        display: flex;
        align-items: center;
      }
    }
    .user-introduce{
      line-height: 28px;
    }
  }

  .comments-section{
    padding: 20px;
    border-top: 8px solid lightgray;
    border-bottom: 8px solid lightgray;

    .comments-box{

    }

    .full-view{
      font-size: 24px;
      text-align: center;
      color: rgb(142, 68, 173);
      padding-top: 20px;
    }
  }

  .product-section{
    padding: 20px;
    .product-title{
      font-size: 24px;
      font-weight: bold;
    }
  }

  .recipe-section{
    padding: 20px;
    .recipe-title{
      font-size: 24px;
      font-weight: bold;
      padding-bottom: 20px;
    }
    .card-box{
      display: flex;
      flex-wrap: wrap;
    }
  }

  
}

.text-box{
  line-height: 25px;
  font-size: 18px;
  padding: 10px 0;
}
</style>