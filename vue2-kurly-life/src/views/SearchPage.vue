<template>
  <div class="search-container">
    <div class="input-box">
      <input type="text" class="search-input" placeholder="검색어를 입력해주세요." @keydown.enter="search" v-model="keywords">
    </div>
    <div class="recently-keywords">
      <div class="recently-keywords-title">
        최근 검색어
      </div>
      <div class="recently-keywords-container">
        <div class="recently-keywords-box" v-for="(keyword, idx) in recentlyKeywords" :key="idx">
          {{ keyword }}
        </div>
      </div>
    </div>
    <div class="recommend-keywords">
      <div class="recommend-keywords-title">
        추천 검색어
      </div>
      <div class="recommend-keywords-container">
        <div class="recommend-keywords-box" v-for="(keyword, idx) in recommendKeywords" :key="idx">
          {{ keyword }}
        </div>
      </div>
    </div>
    <div class="real-time-keywords">
      <div class="real-time-keywords-title">
        급상승 검색어
      </div>
      <div class="real-time-keywords-container">
        <div class="real-time-keywords-box" v-for="(keyword, idx) in realTimeKeywords" :key="idx">
          <div class="rank">
            {{ idx + 1 }}
          </div>
          <div class="keyword">
            {{ keyword }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      recentlyKeywords: ["도시락", "하머스", "두부", "방울토마토", "토마토"],
      recommendKeywords: ["갈비탕", "불고기","삼겹살", "쭈꾸미", "스테이크", "그래놀라", "볶음밥", "돈까스"],
      realTimeKeywords: ["양말", "현미밥", "시래기", "구찌", "김밥재료", "파예"],
      keywords: ""
    }
  },
  methods:{
    search(){
      this.$store.dispatch('contents/searchContents',{
        pageNum: 1,
        keyword: this.keywords,
        category: "",
        theme: this.selectTheme,
      },
      this.$router.push('/search/main')
    )}
  }
}
</script>

<style lang="scss" scoped>
.search-container{
  margin-top:102px;
  width: 480px;
  .input-box{
    padding: 10px;
    .search-input{
      width: 100%;
      height: 30px;
    }
  }
  .recently-keywords{
    padding: 20px 10px 20px 10px;
    .recently-keywords-title{
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .recently-keywords-container{
      display: flex;
      justify-content: space-around;
      .recently-keywords-box{
        padding: 10px 15px 10px 15px;
        border-radius: 30px;
        border: 1px solid lightgray;
      }
    }
  }
  .recommend-keywords{
    padding: 20px 10px 20px 10px;
    .recommend-keywords-title{
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .recommend-keywords-container{
      display: flex;
      flex-wrap: wrap;
      // justify-content: left;
      .recommend-keywords-box{
        padding: 10px 15px 10px 15px;
        border-radius: 30px;
        color: rgb(142, 68, 173);
        border: 1px solid lightgray;
        background: rgb(249, 243, 255);
        margin:5px;
      }
    }
  }
  .real-time-keywords{
    padding: 10px;
    .real-time-keywords-title{
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .real-time-keywords-container{
      .real-time-keywords-box{
        border-bottom: 2px solid gray;
        display: flex;
        padding: 15px 10px 15px 10px;
        .rank{
          font-size: 24px;
          color: rgb(142, 68, 173);
        }
        .keyword{
          font-size: 20px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>