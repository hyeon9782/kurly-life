<template>
  <div class="app-panel" v-if="panel">
    <div class="panel-overlay"></div>
    <div class="panel-content">
        <div class="category-box">
            <div class="category" v-for="(category, idx) in categoryList" :key="idx" :class="{selectCategory:idx==activeCategory}" @click="selectCategory(idx,category.category)">
                {{ category.text }}
            </div>
        </div>
        <div class="theme-box">
            <div class="theme" v-for="(theme, idx) in themeList" :key="idx" :class="{selectTheme:idx==activeTheme}" @click="selectTheme(idx,theme)">
                {{ theme }}
            </div>
        </div>
        <div class="btn-box">
            <div class="write-btn" @click="write">
                글쓰기
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            panel: false,
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
            category:"",
            themeList:[],
            recipeTheme: ["전체", "저녁", "간식", "생일", "야식", "베이커리", "초간단", "요리", "음료", "아이들 간식"],
            lifehackTheme: ["전체", "요리", "보관", "정리", "살림템", "청소", "기타"],
            restaurantTheme: ["전체", "한식", "중식", "일식", "퓨전", "이탈리안", "프렌치"],
            theme:"",
            activeCategory: -1,
            activeTheme: -1,
        }
    },
    methods:{
        showPanel(){
            this.panel ? this.panel = false : this.panel = true
            this.initForm()
        },
        hidePanel(){
            this.panel = false
            this.initForm()
        },        
        initForm(){
            this.activeCategory = -1
            this.activeTheme = -1
            this.category = ""
            this.theme = ""
            this.themeList = []
        },
        selectCategory(idx,category){
            this.activeCategory = idx
            this.category = category
            this.setTheme(category)
        },
        setTheme(category){
            if (category == 'recipe'){
                this.themeList = this.recipeTheme
            } else if (category == 'lifehack'){
                this.themeList = this.lifehackTheme
            } else if (category == 'restaurant'){
                this.themeList = this.restaurantTheme
            }
        },
        selectTheme(idx, theme){
            this.activeTheme = idx
            this.theme = theme
        },
        write(){
            const type = {
                category: this.category,
                theme: this.theme
            }
            console.log(type)
            this.panel = false
            this.$router.push({path:'/write', params: {category: this.category, theme: this.theme }}).catch(err => err);
        }
    },
}
</script>

<style lang="scss" scoped>
.app-panel{
    // z-index: -1;
    position: absolute;
    // top:0;
    bottom: 200px;
    left:0;
    width: 100%;
    height: 800px;

    .panel-overlay{
        position: absolute;
        background:rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
    }
    .panel-content{
        
        background: white;
        position: relative;
        height: 400px;
        width: 100%;
        top:540px;
        left: 0;
        .category-box{
            height: 20%;
            display: flex;
            justify-content: space-around;
            padding:20px;
            .category{
                font-size: 20px;
                border-radius: 50%;
                color:gray;
                background: lightgray;
                width: 80px;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;

            }
        }

        .theme-box{
            height: 55%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .theme{
                margin: 0 10px 0 10px;
                font-size: 18px;
                height: 50px;
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 30px;
                color:gray;
                background: lightgray;
                
            }
        }
        .btn-box{
            display: flex;
            justify-content: center;
            height: 15%;
            .write-btn{
                font-size: 24px;
                border-radius: 30px;
                background: rgb(155, 89, 182);
                color: white;
                height: 50px;
                width: 110px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }



    }
}

.selectCategory{
    background: rgb(155, 89, 182) !important;
    color: white !important;
}

.selectTheme{
    background: rgb(155, 89, 182) !important;
    color: white !important;
}
</style>