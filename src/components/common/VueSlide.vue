<template>
  <hooper>
    <slide v-for="(event, idx) in events" :key="idx">
      {{ event }}
    </slide>
    <navigation slot="hooper-addons"></navigation>
  </hooper>
</template>

<script>
import { Hooper, Slide, Navigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    props:{
        events:{
            type: Array,
            default: () => ([])
        }
    },
    components: {
        Hooper,
        Slide,
        Navigation
    },
    data(){
        return{
            hooperSettings: {
                itemsToShow: 2,
                centerMode: true
            },
        }
    }
}
</script>

<style>

</style>