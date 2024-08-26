<script>
import BottomNavVue from "./components/BottomNav.vue";
export default{
  components:{
    BottomNavVue:BottomNavVue,
  },
}
</script>

<template>

  <router-view></router-view>
  <BottomNavVue/>
</template>

<style>

</style>
