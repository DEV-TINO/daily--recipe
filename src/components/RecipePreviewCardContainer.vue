<template>
  <div class="card-container">
    <RecipePreviewCardVue v-for="(value, index) in previewContent" :key="index" :previewContent="previewContent[value.index]" @click="handleClickGoToDetail(value.id)"/>
  </div>
</template>

<script>
import RecipePreviewCardVue from './RecipePreviewCard.vue'
export default {
  data(){
    return {
      previewContent: [
        {
          index: 0,
          id: "eggsoysaucerice",
          title: "간장계란밥",
          discription: "누구나 만들 수 있는 간장 계란밥 레시피 대공개",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          index: 1,
          title: "title2",
          discription: "subtitle",
          thumbnail: "",
        },
        {
          index: 2,
          title: "title3",
          discription: "subtitle",
          thumbnail: "",
        },
      ],
    }
  },
  components: {
    RecipePreviewCardVue: RecipePreviewCardVue,
  },
  methods: {
    handleClickGoToDetail(recipeName) {
      const requestUrl = '/detail/'+recipeName
      this.$router.push(requestUrl)
    },
  }
}
</script>

<style>
.card-container {
  margin-top: 10px;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>