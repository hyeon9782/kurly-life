<template>
  <div class="sub-header" @click="back">
    <span class="material-symbols-outlined back">
      arrow_back_ios
    </span>
    <div class="header-title">
        {{ title }}
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.back()
        }
    },
    computed:{
        title(){
            return this.$store.getters.headerTitle
        }
    }
}
</script>

<style lang="scss" scoped>
.sub-header{
    display: flex;
    width: 480px;
    box-sizing: border-box;
    padding: 20px;
     @media screen and (max-width: 575px) {
        width: 100%;
    }
    .back{
        font-size: 28px;
        color: rgb(190, 190, 190);
        
    }
    .header-title{
        width: 85%;
        font-size: 20px;
        margin-left: 180px;
    }
}
</style>