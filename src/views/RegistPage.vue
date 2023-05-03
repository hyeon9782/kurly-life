<template>
  <div class="content-write-page">
    <div class="title-box">
      <div class="title-text">
        제목
      </div>
      <div class="title-input-box">
        <input type="text" class="title-input" placeholder="제목을 입력해주세요." v-model="title">
      </div>
    </div>
    <div class="category-box">
      <div class="category-text">카테고리</div>
      <div class="category-select-box">
        <select v-model="category" class="category-select" @change="themeChange">
          <option v-for="(item, index) in categoryList" :key="index" :value="item.category">{{ item.text }}</option>
        </select>
      </div>
    </div>
    <div class="theme-box">
      <div class="theme-text">테마</div>
      <div class="theme-select-box">
        <select v-model="theme" class="theme-select">
          <option v-for="(item, index) in themeList" :key="index" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>
    <!-- <div class="keyword-box">
      <div class="keyword-text">
        키워드
      </div>
      <div class="keyword-input-box">
        <input type="text" class="keyword-input" placeholder="키워드를 입력해주세요." v-model="keyword">
      </div>
    </div>
    <div class="ingredient-box" v-if="true">
      <div class="ingredient-text">
        재료
      </div>
      <div class="ingredient-input-box">
        <input type="text" class="ingredient-input" placeholder="재료를 입력해주세요." v-model="localKeyword">
      </div>
    </div> -->
    <div class="thumbnail-box">
      <div class="thumbnail-text">
        썸네일
      </div>
      <div class="thumbnail-file-box">
        <input type="file" class="thumbnail-input">
      </div>
    </div>
    <div class="content-box">  
      <VueEditor 
      v-model="htmlForEditor"/>
    </div>
    <div class="upload-box">
      <div class="upload-btn" @click="storyUpload">
        스토리 공유하기
      </div>
    </div>
  </div>
</template>

<script>
import { registContents } from '@/api/contents';
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
export default {
  components:{
    VueEditor
  },
  data(){
    return{
      title: "",
      keyword: "",
      keywords: [],
      categoryList: [
          {
              text: "레시피",
              category: "recipe"
          },
          {
              text: "생활팁",
              category: "lifehack"
          },
          {
              text: "맛집",
              category: "restaurant"
          },
      ],
      category: "",
      theme: "",
      themeList: [],
      recipeTheme: ["저녁", "간식", "생일", "야식", "베이커리", "초간단", "요리", "음료", "아이들 간식"],
      lifehackTheme: ["요리", "보관", "정리", "살림템", "청소", "기타"],
      restaurantTheme: ["한식", "중식", "일식", "퓨전", "이탈리안", "프렌치"],
      localKeyword: "",
      localKeywords: [],
      content: null,
      test: "",
      htmlForEditor: ""
    }
  },
  methods:{
    storyUpload(){
      this.cutStr()
      const bulletinData = {
        contentsId: 32,
        title: this.title,
        content: this.htmlForEditor,
        category: this.category,
        theme: this.theme,
        keyword: this.keywords,
        ingredient: "",
        like: 0,
        userId: 1,
        nickname: "테스트입니다",
        localKeyword: this.localKeyword,
      }
      console.log(bulletinData);
      console.log(this.htmlForEditor);
      alert("업로드 완료!")
      console.log(bulletinData)
      this.$router.back()
      registContents(bulletinData)
      
    },
    themeChange(){
      if (this.category === "recipe") this.themeList = [...this.recipeTheme]
      else if (this.category === "lifehack") this.themeList = [...this.lifehackTheme]
      else if (this.category === "restaurant") this.themeList = [...this.restaurantTheme]
      
    },
    setEditorContent() {
      if(this.type == "321"){
        this.title = ""
        this.keyword = ""
        this.localKeyword = ""
        this.content = "<h1>Html For Editor</h1>";
      }
    },
    cutStr(){
      this.localKeywords = this.localKeyword.split("#").filter(Boolean)
      this.keywords = this.keyword.split("#").filter(Boolean)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
.content-write-page{
  width: 480px;
  .title-box{
    display: flex;
    padding: 0 20px 20px 20px;
    .title-text{
      width: 20%;
      font-size: 18px;
      color: lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title-input-box{
      width: 80%;
      text-align: center;
      .title-input{
        width: 90%;
        height: 25px;
      }
    }
  }

  .category-box{
    display: flex;
    padding: 0 20px 20px 20px;
    .category-text{
      font-size: 18px;
      width: 20%;
      color: lightgray;
    }

    .category-select-box{
      width: 80%;
      text-align: center;
      .category-select{
        height: 25px;
        width: 90%;
      }
    }
  }

  .theme-box{
    display: flex;
    padding: 0 20px 20px 20px;
    .theme-text{
      text-align: center;
      font-size: 18px;
      width: 20%;
      color: lightgray;
    }

    .theme-select-box{
      width: 80%;
      text-align: center;
      .theme-select{
        height: 25px;
        width: 90%;
      }
    }
  }
  .keyword-box{
    display: flex;
    padding: 0 20px 20px 20px;
    .keyword-text{
      width: 20%;
      font-size: 18px;
      color: lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .keyword-input-box{
      width: 80%;
      text-align: center;
      .keyword-input{
        width: 90%;
        height: 25px;
      }
    }
  }
  .ingredient-box{
    display: flex;
    padding: 0 20px 20px 20px;
    .ingredient-text{
      width: 20%;
      font-size: 18px;
      color: lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ingredient-input-box{
      width: 80%;
      text-align: center;
      .ingredient-input{
        width: 90%;
        height: 25px;
      }
    }
  }

  .thumbnail-box{
    display: flex;
    padding: 0 20px 20px 20px;
    .thumbnail-text{
      width: 20%;
      font-size: 18px;
      color: lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .thumbnail-file-box{
      width: 80%;
      text-align: center;
      .thumbnail-input{
        width: 90%;
        height: 25px;
      }
    }
    
  }

  .content-box{
    padding: 20px;
  }
  .upload-box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .upload-btn{
      background: rgb(249, 243, 255);
      color: rgb(142, 68, 173);
      border-radius: 30px;
      padding: 15px 20px 15px 20px;
      
    }
  }
}

@media screen and (max-width: 575px) {
  .content-write-page{
    width: 100%;
  }
}
</style>