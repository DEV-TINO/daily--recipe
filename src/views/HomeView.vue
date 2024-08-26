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
<div class="banner">
  <img class="image" src="../images/homeicon.jpg">
  <div class="userinfo">
    <div class="username">
      username
    </div>
    <button>로그아웃</button>
  </div>
</div>
  <div class="maincontainer">
    <div class="maintitle">최근 본 레시피</div>
    <RecentViewVue/>
  </div>

  <div class="maincontainer">
    <div id="threecontainertitle">
      <div class="maintitle">저장한 레시피</div>
      <router-link to="/resultlist">
      <div id>더보기&gt;</div></router-link>
    </div>
    <ThreeContainerVue/>
  </div>

  <div class="maincontainer">
    <div id="threecontainertitle">
      <div class="maintitle">등록한 레시피</div> 
      <router-link to="/resultlist"><div id>더보기&gt;</div></router-link>
    </div>
    <ThreeContainerVue/>
  </div>
</template>
<style scoped>
#threecontainertitle{
  display: grid;
  grid-template-columns: 1fr 60px;
}
.maintitle{
  font-size: 24px;
  font-weight: bold;
}
.maincontainer{
  margin-top: 20px;
  margin-right: 30px;
  margin-left: 30px;
}
.banner{
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
}
.userinfo{
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.username{
  margin-right: 10px;
}
.image{
  width: 130px;
  height: 80px;
}
</style>