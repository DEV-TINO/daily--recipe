<template>
  <div class="search-title">검색</div>
  <div class="search-bar">
    <input class="search-input" type="text" placeholder="요리명을 검색하세요" v-model="searchText">
    <img @click="handleClickSearch()" class="search-img" src="/images/searchicon.png">
  </div>
  <div class="recent-search">최근 검색어</div>
  <div v-if="recentSearches.length > 0" class="recent-search-container">
    <div v-for="(term, index) in recentSearches" :key="index" class="recent-search-item">
      <!-- 검색어 클릭 시 검색 실행 -->
      <span @click="handleClickRecent(term)" class="search-term">{{ term }}</span>
      
      <!-- X 버튼으로 검색어 삭제 -->
      <button @click="handleClickRemoveSearch(index)" class="remove-button">X</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadRecentSearches();
  },
  data() {
    return {
      searchText: "",
      recentSearches: []
    }
  },
  methods: {
    handleClickSearch() {
      if (this.searchText) {
        this.saveSearch(this.searchText)
        this.$router.push("/search/"+this.searchText)
      }
    },
    loadRecentSearches() {
      const searches = localStorage.getItem('recentSearches')
      if (searches) {
        this.recentSearches = JSON.parse(searches);
      }
    },
    saveSearch(term) {
      let searches = localStorage.getItem('recentSearches');
      searches = searches ? JSON.parse(searches) : [];

      // 중복된 검색어 제거하고 최근 검색어 목록에 추가
      searches = searches.filter(item => item !== term);
      searches.unshift(term);

      // 최대 5개의 최근 검색어만 저장
      if (searches.length > 10) {
        searches.pop();
      }

      localStorage.setItem('recentSearches', JSON.stringify(searches));
      this.recentSearches = searches;
    },
    handleClickRecent(term) {
      this.searchText = term;
      this.handleClickSearch(); // 검색 실행
    },
    // 특정 검색어 삭제
    handleClickRemoveSearch(index) {
      this.recentSearches.splice(index, 1);
      localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));
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
.recent-search {
  display: flex; 
  flex-basis: 100%; 
  align-items: center; 
  color: rgba(0, 0, 0, 0.35); 
  font-size: 20px;
  margin: 8px 0px;
}
.recent-search::before, .recent-search::after {
  content: ""; 
  flex-grow: 1; 
  background: rgba(0, 0, 0, 0.35); 
  height: 1px; 
  font-size: 0px; 
  line-height: 0px; 
  margin: 10px;
}
.recent-search-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 16px;
  box-sizing: border-box;
  align-content: center;
  justify-content: center;
}
.recent-search-item {
  background: #fff;
  border: solid 1px #eee;
  width: fit-content;
  padding: 3px;
  padding-left: 15px;
  border-radius: 10px;
}
.remove-button {
  border: none;
  background: none;
  font-size: 18px;
  margin-left: 10px;
  padding-right: 5px;
  color: #999;
}
.search-term {
  font-size: 18px;
  color: #999
}
</style>