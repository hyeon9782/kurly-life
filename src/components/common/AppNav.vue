<template>
  <div class="nav-block">
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
    </div>
    
  </div>
</template>

<script>
export default {
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
        {
          icon: "edit_square",
          href: "/write"
        },
      ],
    }
  },
  methods:{
    togglePanel() {
      this.$refs.panel.showPanel()
    },
    movePage(href){
      this.$router.push(href).catch(err => err);
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-block{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.nav-container{
  z-index: 1;
  position: relative;
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

@media screen and (max-width: 575px) {
  .nav-container{
    width: 100vw;
  }
}
</style>