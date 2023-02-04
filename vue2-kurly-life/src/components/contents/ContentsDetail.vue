<template>
  <div class="content-detail">
    <div class="title-box">
      {{ title }}
    </div>
    <div class="detail-head">
      <UserBox uploadDate="2022-08-20"/>
      <div class="btn-box">
        <FollowBtn />
      </div>
    </div>
    <div class="content-section">
      <tempalte v-if="false">
        <div v-for="content in contents" :key="content.text" class="content-module">
          <div class="content-text" v-if="content.text != null && content.text != ''">
            {{ content.text }}
          </div>
          <div class="content-img" v-if="content.img != null && content.img != ''">
            <AppImage :img="content.img" v-if="false"/>
          </div>
        </div>
      </tempalte>
      <div>
        <img src="https://post-phinf.pstatic.net/MjAxOTA4MDVfMTIy/MDAxNTY0OTQ3ODQ4OTQy.QXteWdrGfktqdVGNfqlQYYHzfm0mmAExpmHIkzHk35Ug.vwv-PcE5NyiKY4jsdLq48iZv8hNAKgBMl65YL2Zd8R0g.JPEG/mug_obj_201908050444109060.jpg?type=w1080" alt="dd" width="100%">
        <div class="text-box">
          사라다 빵을 만들어볼거에요~~ㅎㅎ 사라다 빵이 얼마나 맛있게요~~?
        </div>
        <img src="https://post-phinf.pstatic.net/MjAxOTA4MDVfMjIw/MDAxNTY0OTQ3ODQ3NjI2.mMEC0cDA5UxojMLqhJXnLEcPrsWUce7LofFhVsUp08kg.9_0I_5N2vRnjY_BR7dBxcNiTFA8Oz74rbWkgC6FCzM4g.JPEG/mug_obj_201908050444102089.jpg?type=w1080" alt="dd" width="100%">
        <div class="text-box">
          찐감자를 살짝 구워주시면 감칠맛이 살아납니다!
        </div>
        <img src="https://post-phinf.pstatic.net/MjAxOTA4MDVfMjQ5/MDAxNTY0OTQ3ODQ5OTg5.o2li_IA9NFYHbi38zf9mptFANwL1v36h8GZfLcfLicsg.b3qoZvxH8rhPmrkRCiV0Lfq6rPkI8g5Ag86zgSbJ674g.JPEG/mug_obj_201908050444103220.jpg?type=w1080" alt="dd" width="100%">
        <div class="text-box">
          오늘의 요리 찐감자를 구워서 만든 사라다 빵으로 만든 새우 감자 크로켓 완성!
        </div>
      </div>
    </div>
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
        <CommentsItem v-for="i in 5" :key="i"/>
      </div>
      <div class="full-view" @click="commentsFullView">
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
import AppImage from '@/components/common/AppImage.vue';
import ProductSlide from '@/components/product/ProductSlide.vue';
import ScrollUp from '@/components/common/ScrollUp.vue';
export default {
  methods:{
    commentsFullView(){
      this.$router.push(`/comments/${this.contentsId}`)
    }
  },
  data(){
    return{
      contentsId: "214153",
      title: "할지니 인생에 할지니 인생에할지니 인생에할지니",
      img: "",
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
      products: [
        {
          img: "",
          title: "테스트 제목 1",
          price: 19165
        },
        {
          img: "",
          title: "테스트 제목 2",
          price: 36571
        },
        {
          img: "",
          title: "테스트 제목 3",
          price: 15312
        },
        {
          img: "",
          title: "테스트 제목 4",
          price: 95723
        },
        {
          img: "",
          title: "테스트 제목 5",
          price: 77123
        },
      ],
      contents: [
        {
          text: '안녕하세요!!!!!!!!!!!!!!!!!!!!!!!!!!',
          img: ''
        },
        {
          text: '저는!!!!!!!!!!!!!!!!!!!!',
          img: 'ㄴㅁㅇ'
        },
        {
          text: '안녕안녕',
          img: ''
        },
        {
          text: '내 이름은 디보',
          img: 'ㅁㄴㅇ'
        },
      ],
    }
  },
  components:{
    ProductSlide,
    FollowBtn,
    UserBox,
    AppImage,
    ScrollUp,
    ContentsCard,
    ClickBox,
    CommentsItem
  }
}
</script>

<style lang="scss" scoped>
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