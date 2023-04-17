<template>
    <div class="header-nav">
        <template>
            <div v-for="(i,idx) in nav" :key="idx" class="nav-item" :to="i.href" :class="{select:idx==active}" @click="movePage(idx,i)">
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
            active: 0
        }
    },
    methods:{
        movePage(idx,i){
            this.$router.push({path: i.href,params: {category: i.text }}).catch(err => err);
        },
        select(idx,category,path){
            this.$store.dispatch('contents/searchContents',{
                pageNum: 1,
                keyword: this.keywords,
                category, 
                theme: this.selectTheme,
            })
            this.$router.push(path)
        }
    },
    watch: {
        '$route.path': function(val) {
            if (val === "/") this.active = 0
            else if (val === "/following") this.active = 1
            else if (val === "/recipe") this.active = 2
            else if (val === "/lifehack") this.active = 3
            else if (val === "/restaurant") this.active = 4
        }
    }
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