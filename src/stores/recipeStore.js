import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('post', {
  state: () => ({
    posts: [],
    recentPosts: [],
    bookmaredPosts: [],
  }),
  actions: {
    async fetchPosts() {
      const response = await fetch('/mockdata/index.js');
      this.posts = await response.json();
    },
    addPost(post) {
      this.posts.push(post);
    },
    viewPost(post) {
      if (!this.recentPosts.includes(post)) {
        this.recentPosts.push(post);
      }
    },
    savePost(post) {
      if (!this.bookmaredPosts.includes(post)) {
        this.bookmaredPosts.push(post);
      }
    },
  }
})