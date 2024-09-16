<template>
  <router-view></router-view>
  <BottomNavVue/>
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

</style>
