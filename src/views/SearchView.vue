<template>
  <div id="searchgroup"><input type="text" placeholder="레시피를 검색하세요">
  <!-- 
  검색 버튼 현재는 라우터로 연결되어있지만, 텍스트박스에 담긴 내용을 요청하는 것으로 변환할 예정.
  -->
  <router-link to="/resultlist"><button>검색</button></router-link></div>

</template>

<script>
export default {

}
</script>

<style>

</style>