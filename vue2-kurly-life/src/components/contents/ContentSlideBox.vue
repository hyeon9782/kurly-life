<template>
  <div class="contents-slide-box">
    <div class="slide-head">
      <div class="title-box">
        <div class="title">
          {{ title }}
        </div>
        <div class="description">
          {{ description }}
        </div>
      </div>
      <div class="full-view" @click="fullView(category)" v-if="category != 'product'">
        전체보기 >
      </div>
    </div>
    <div class="slide-box">
        <ContentSlide :contents="contents" v-if="category !== 'recipeTheme' && category !== 'product'"/>
        <ThemeSlide :theme="theme"  v-if="category === 'recipeTheme'" />
        <ProductSlide :products="products"  v-if="category === 'product'"/>
    </div>
  </div>
</template>

<script>
import ProductSlide from '@/components/product/ProductSlide.vue';
import ThemeSlide from '@/components/contents/ThemeSlide.vue';
import ContentSlide from '@/components/contents/ContentSlide.vue';
export default {
    props:{
        title:{
            type: String,
            default: () => ("")
        },
        description:{
            type: String,
            default: () => ("")
        },
        category:{
            type: String,
            default: () => ("")
        },
        contents:{
            type: Array,
            default: () => ([])
        },
        products:{
            type: Array,
            default: () => ([])
        }
    },
    data(){
        return{
            theme:[""],
        }
    },
    components:{
        ContentSlide,
        ThemeSlide,
        ProductSlide
    },
    methods:{
        
        fullView(category){
            let param = ""
            switch(category){
                case 'recipe':
                    param = 'recipe'
                    break;
                case 'recipeTheme':
                    param = 'recipe'
                    break;
                case 'lifehack': 
                    param = 'lifehack'
                    break;
                case 'restaurant': 
                    param = 'restaurant'
                    break;
            }
            this.$router.push({name: param, params: {category: param }})
        },
    }
}
</script>

<style lang="scss" scoped>
.contents-slide-box{
    padding: 10px;
    margin: 30px 0 30px 0;
    .slide-head{
        display: flex;
        justify-content: space-between;
        .title-box{
            width: 78%;
            .title{
                font-size:24px;
                font-weight: bold;
                padding: 5px;
            }
            .description{
                font-size: 14px;
                color: lightgray;
                padding: 5px;
            }
        }
        .full-view{
            width: 22%;
            font-size: 20px;
            color: plum;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    // .slide-box{
    //     slide
    // }
}
</style>