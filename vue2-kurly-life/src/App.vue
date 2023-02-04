<template>
  <div id="app">
    <div>
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
}

.main-section{
  margin-bottom: 70px;
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
