<template>
  <div class="top-nav-bar">
    <div @click="handleClickgoToParent()">&lt;</div>
    <div class="result-title">{{ mode }}</div>
    <div></div>
  </div>
  <div class="margin-90px"></div>
  <RecipeListItemVue v-for="(value, index) in displayedItems" :key="index" @click="handleClickGoToDetail(value.id)" :previewData="value"/>
  <div class="margin-90px"></div>
</template>

<script>
import RecipeListItemVue from '@/components/RecipeListItem.vue'
import axios from 'axios';
export default {
  mounted() {
    axios.get('/mockdata/index.json')
      .then(response => {
        this.recipeList = response.data;
      })
      .catch(error => {
        console.error("리스트를 가져오는데 실패했습니다.", error);
      });
  },
  data(){
    return {
      searchQuery: this.query || '',
      recipeList: []
    }
  },
  methods: {
    handleClickgoToParent() {
      const currentPath = this.$route.path;
      // 현재 경로를 '/'로 분할하고 마지막 경로를 제거
      const parentPath = currentPath.split('/').slice(0, -1).join('/');
      
      if (parentPath) {
        // 상위 경로로 이동
        this.$router.push(parentPath);
      } else {
        // 이미 루트에 도달했다면 루트로 이동
        this.$router.push('/');
      }
    },
    handleClickGoToDetail(recipeName) {
      const detailPath = this.$route.path+'/detail/'+recipeName;
      this.$router.push(detailPath);
    },
  },
  components: {
    RecipeListItemVue: RecipeListItemVue,
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: false,
    }
  },
  computed: {
    displayedItems() {
      if (this.mode === '검색결과'){
        return this.recipeList.filter(item =>
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.recipeList;
    }
  }
}
</script>

<style>
.margin-90px{
  height: 90px;
}
.top-nav-bar {
  width: 100%;
  box-sizing: border-box;
  left: 0;
  position: fixed;
  z-index: 100;
  display: grid;
  grid-template-columns: 17px 1fr 17px;
  font-size: 24px;
  font-weight: bold;
  padding: 30px;
  background-color: #fff;
  top: 0;
}
.result-title {
  width: auto;
  text-align: center;
}
</style>