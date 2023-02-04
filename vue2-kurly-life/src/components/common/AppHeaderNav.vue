<template>
    <div class="header-nav">
        <template v-if="test == '' || test == null">
            <div v-for="(i,idx) in nav" :key="idx" class="nav-item" :to="i.href" :class="{select:idx==active}" @click="movePage(idx,i)">
                {{ i.text }}
            </div>
        </template>
        <template v-if="test != ''">
            <div v-for="(i,idx) in navSearch" :key="idx" class="nav-item" :to="i.href" :class="{select:idx==active}" @click="select(idx,i.category,i.href)">
                {{ i.text }}
            </div>
        </template>
    </div>
</template>

<script>
export default {
    computed:{
        test(){
            return this.$store.state.contents.keyword
        }
    },
    data(){
        return{
            nav:[
                {
                    text: "홈",
                    href: "/"
                },
                {
                    text: "팔로잉",
                    href: "/following"
                },
                {
                    text: "레시피",
                    href: "/recipe"
                },
                {
                    text: "생활팁",
                    href: "/lifehack"
                },
                {
                    text: "맛집",
                    href: "/restaurant"
                },
            ],
            navSearch:[
                {
                    text: "전체",
                    href: "/",
                    category: "",
                },
                {
                    text: "스토어",
                    href: "/store",
                    category: ""
                },
                {
                    text: "레시피",
                    href: "/recipe",
                    category: "recipe"
                },
                {
                    text: "생활팁",
                    href: "/lifehack",
                    category: "tip"
                },
                {
                    text: "맛집",
                    href: "/restaurant",
                    category: "popular-restaurant"
                },
            ],
            active: 0
        }
    },
    methods:{
        change(idx){
            this.active = idx
        },
        movePage(idx,i){
            this.change(idx)
            this.$router.push({path: i.href,params: {category: i.text }}).catch(err => err);
        },
        select(idx,category,path){
            this.change(idx)
            this.$store.dispatch('contents/searchContents',{
                pageNum: 1,
                keyword: this.keywords,
                category, 
                theme: this.selectTheme,
            })
            this.$router.push(path)
        }
    },
    // watch: {
    //     '$route': 'change'
    // }
}
</script>

<style lang="scss" scoped>
.header-nav{
    background: white;
    width: 480px;
    height: 50px;
    // font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid gray;
    .nav-item{
        width: 50px;
        height: 34px;
        display: flex;
        align-items: end;
        justify-content: center;
        text-align: center;
        text-decoration: none;
        color: black;
        padding-bottom: 10px;
        // border-bottom: 6px solid rgb(97, 2, 129);
    }
}

.select{
    border-bottom: 6px solid rgb(97, 2, 129) !important;
}
</style>