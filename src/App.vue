<template>
  <router-view></router-view>
  <BottomNavVue v-if="this.$route.path == '/home' || this.$route.path == '/search'"/>
</template>

<script>
import BottomNavVue from "./components/BottomNav.vue";
export default {
  components: {
    BottomNavVue: BottomNavVue,
  },
}
</script>

<style>
* {
  font-family: "Pretendard-Regular.ttf" !important;
}
</style>
