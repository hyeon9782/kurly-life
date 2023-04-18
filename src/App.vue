<template>
  <div id="app">
    <div class="app-box">
      <AppHeader v-if="!type"/>
      <SubHeader v-if="type"/>
      <div class="main-section">
        <router-view/>
      </div>      
      <AppNav />
    </div>
  </div>
</template>


<script>
import SubHeader from '@/components/common/SubHeader.vue';
import AppHeader from '@/components/common/AppHeader.vue';
import AppNav from '@/components/common/AppNav.vue';
export default {
  components:{
    AppHeader,
    AppNav,
    SubHeader
  },
  computed:{
    type(){
      return this.$store.getters.headerType
    }
  }
}
</script>


<style lang="scss">

body{
  font-family: 'Nanum Gothic', sans-serif;
  margin: 0;
}

.app-box{
  height: 100vh;
}

.main-section{
  
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: rgba(0,0,0,0);
}
</style>
