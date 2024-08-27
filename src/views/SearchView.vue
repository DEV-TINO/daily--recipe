<template>
<div class="searchtitle">
  <div>검색</div>
</div>
<div class="allign">
  <div class="search">
    <input type="text" placeholder="요리명을 검색하세요">
    <router-link to="/resultlist"><img src="../images/searchicon.png"></router-link>
  </div>
</div>  
<div class="hr-sect">최근 검색어</div>


<!-- 
  검색 버튼 현재는 라우터로 연결되어있지만, 텍스트박스에 담긴 내용을 요청하는 것으로 변환할 예정.
  -->

</template>

<script>
export default {

}
</script>

<style scoped>
.allign{
  margin-bottom: 30px;
}
.hr-sect {
  display: flex; 
  flex-basis: 100%; 
  align-items: center; 
  color: rgba(0, 0, 0, 0.35); 
  font-size: 20px;
  margin: 8px 0px;
}

.hr-sect::before, .hr-sect::after {
  content: ""; 
  flex-grow: 1; 
  background: rgba(0, 0, 0, 0.35); 
  height: 1px; 
  font-size: 0px; 
  line-height: 0px; 
  margin: 10px;
}
.searchtitle{
  width: 100%;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
.search{
  position: relative;
  width: 100%;
  align-items: center;
}
input{
  width: 300px;
  border: 1px solid #FF9639;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 20px;
}
img{
  position: absolute;
  width: 20px;
  top: 12px;
  height: 20px;
  margin: 0;
}
</style>