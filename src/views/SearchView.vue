<template>
  <div class="search-title">검색</div>

  <div class="search-bar">
    <input class="search-input" type="text" placeholder="요리명을 검색하세요">
    <img @click="handleClickSearch()" class="search-img" src="/images/searchicon.png">
  </div>

  <div class="hr-sect">최근 검색어</div>
<!-- 검색 버튼 현재는 라우터로 연결되어있지만, 텍스트박스에 담긴 내용을 요청하는 것으로 변환할 예정. -->
</template>

<script>
export default {
  methods: {
    handleClickSearch() {
      this.$router.push("/resultlist")
    }
  }
}
</script>

<style>
.search-title {
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 30px;
}
.search-bar {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 0fr;
  border: 1px solid #FF9639;
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 30px;
}
.search-input {
  background-color: transparent;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 20px;
}
.search-img {
  padding: 10px;
  width: 20px;
  top: 12px;
  height: 20px;
  margin: 0;
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
</style>