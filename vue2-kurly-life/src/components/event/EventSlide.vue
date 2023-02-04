<template>
  <hooper>
    <slide v-for="(event, idx) in events" :key="idx">
      <EventCard :eventImage="event"/>
    </slide>
    <navigation slot="hooper-addons"></navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import { Hooper, Slide, Navigation, Pagination as HooperPagination, } from 'hooper';
import 'hooper/dist/hooper.css';
import EventCard from '@/components/event/EventCard.vue';
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
    Navigation,
    HooperPagination,
    EventCard
  },
}
</script>

<style>

</style>