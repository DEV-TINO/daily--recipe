<template>
  <div id="container">
    <MiniContentsVue/>
    <MiniContentsVue/>
    <MiniContentsVue/>
</div>
</template>

<script>
import MiniContentsVue from './MiniContents.vue'
export default {
    components: {
        MiniContentsVue: MiniContentsVue,
    }
}
</script>

<style>
#container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>