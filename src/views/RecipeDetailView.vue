<template>
<RecipeDetailVue :recipe="recipe"/>
</template>

<script>
import RecipeDetailVue from '@/components/RecipeDetail.vue'
export default {
  data() {
    return {
      recipe: {
        user_id: 'shushu',
        thumbnail: 'fdjksljfksl',
        title: '',
        description: '',
        ingredient: [
          {
            name: '',
            quantity: '',
          },
        ],
        instruction: [
          {
            title: '',
            imageUrl: '',
            description: '',
          },
        ],
        created_at: '2024-09-25',
      },
    }
  },
  components: {
    RecipeDetailVue: RecipeDetailVue
  },
  methods: {
    handleClick() {
    }
  }
}
</script>

<style>

</style>