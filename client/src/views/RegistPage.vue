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
    <div class="keyword-box">
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
    </div>
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
      <div v-if="test">
        {{ content }}
      </div>
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
// import { insertContents } from "@/api/bulletin"
// import axios from "axios";
export default {
  components:{
    VueEditor
  },
  data(){
    return{
      title: "",
      keyword: "",
      keywords: [],
      localKeyword: "",
      localKeywords: [],
      content: null,
      test: "",
      htmlForEditor: ""
    }
  },
  // created(){
  //   this.setEditorContent()
  // },
  methods:{
    storyUpload(){
      this.cutStr()
      const bulletinData = {
        contentsId: 32,
        title: this.title,
        content: this.htmlForEditor,
        category: this.$route.params.category,
        theme: this.$route.params.theme,
        keyword: this.keywords,
        ingredient: "",
        like: 0,
        userId: 1,
        nickname: "테스트입니다",
        localKeyword: this.localKeyword,
      }
      console.log(bulletinData);
      console.log(this.htmlForEditor);
      // alert("업로드 완료!")
      // this.$router.back()
      registContents(bulletinData)
      
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
    // handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
    //   // An example of using FormData
    //   // NOTE: Your key could be different such as:
    //   // formData.append('file', file)

    //   var formData = new FormData();
    //   formData.append("image", file);

    //   axios({
    //     url: "http://localhost:8080/api/upload",
    //     method: "POST",
    //     data: formData
    //   })
    //     .then(result => {
    //       const url = result.data.url; // Get url from response
    //       Editor.insertEmbed(cursorLocation, "image", url);
    //       resetUploader();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
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
      font-size: 22px;
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
  .keyword-box{
    display: flex;
    padding: 0 20px 20px 20px;
    .keyword-text{
      width: 20%;
      font-size: 22px;
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
      font-size: 22px;
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
      font-size: 22px;
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
    padding: 0px 20px 20px 20px;
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
</style>