<template>
  <div class="card-container">
    <RecipePreviewCardVue v-for="(value, index) in cardData" :key="index" :previewContent="value" @click="handleClickGoToDetail(value.id)"/>
  </div>
</template>

<script>
import RecipePreviewCardVue from './RecipePreviewCard.vue'
export default {
  components: {
    RecipePreviewCardVue: RecipePreviewCardVue,
  },
  methods: {
    handleClickGoToDetail(recipeId) {
      const requestUrl = '/detail/'+recipeId
      this.$router.push(requestUrl)
    },
  },
  props: {
    cardData: Array,
  }
}
</script>

<style>
.card-container {
  margin-top: 10px;
  width: 100%;
  display: inline-flex;
  justify-content: left;
  gap: 25px;
}
</style>