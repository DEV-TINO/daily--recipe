<template>
  <div class="topnavbar">
    <div @click="backbutton()">&lt;</div>
    <div>results</div>
    <div></div>
  </div>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
</template>

<script>
import MiddleContentsVue from '@/components/MiddleContents.vue'
export default {
  methods:{
    backbutton(){
      this.$router.go(-1);
    },
  },
  components:{
    MiddleContentsVue: MiddleContentsVue,
  },
}
</script>

<style>
.topnavbar{
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>