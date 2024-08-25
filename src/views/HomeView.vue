<script>
import SwipeContainer from '@/components/SwipeContainer.vue';
import ThreeContainerVue from '@/components/ThreeContainer.vue';
export default{
  components: {
    RecentViewVue: SwipeContainer,
    ThreeContainerVue: ThreeContainerVue,
  }
}
</script>

<template>
  <div><h1>최근 본 레시피</h1></div>
  <RecentViewVue/>
  <div id="threecontainertitle">
    <h1>저장한 레시피</h1>
    <router-link to="/resultlist">
    <div id>더보기&gt;</div></router-link>
  </div>
  <ThreeContainerVue/>
  <div id="threecontainertitle">
    <h1>등록한 레시피</h1> 
    <router-link to="/resultlist"><div id>더보기&gt;</div></router-link>
  </div>
  <ThreeContainerVue/>
</template>
<style scoped>
#threecontainertitle{
  display: grid;
  grid-template-columns: 1fr 100px;
}
</style>