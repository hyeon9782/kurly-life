<template>
  <div class="nav-block">
    <AppPanel ref="panel"/>
    <div class="nav-container">
      <div class="menu">
        <span class="material-symbols-outlined">
          menu
        </span>
      </div>
      <div v-for="(i, idx) in nav" :key="idx" class="link" @click="movePage(i.href)">
        <span class="material-symbols-outlined">
          {{ i.icon }}
        </span>
      </div>
      <div class="write" @click="togglePanel">
        <span class="material-symbols-outlined">
          edit_square
        </span>
      </div>
    </div>
    
  </div>
</template>

<script>
import AppPanel from '@/components/common/AppPanel.vue';
export default {
  components:{
    AppPanel
  },
  data(){
    return{
      nav: [
        {
          icon: "home",
          href: "/"
        },
        {
          icon: "search",
          href: "/search"
        },
        {
          icon: "person",
          href: "/mypage"
        },
      ],
    }
  },
  methods:{
    togglePanel() {
      this.$refs.panel.showPanel()
    },
    write(){
      this.$router.push("/write")
    },
    movePage(href){
      this.$refs.panel.hidePanel()
      this.$router.push(href).catch(err => err);
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-block{
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.nav-container{
  z-index: 9;
  background: white;
  width: 480px;
  height: 70px;
  font-size: 48px;
  display: flex;
  justify-content: space-around;
  margin: auto;
    .link{
      text-decoration: none;
      color:black;
    }
}
</style>