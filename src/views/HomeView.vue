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
  <h1>최근 본 레시피</h1>
  <RecentViewVue/>
  <h1>저장한 레시피</h1>
  <ThreeContainerVue/>
  <h1>등록한 레시피</h1>
  <ThreeContainerVue/>
</template>
<style scoped>

</style>