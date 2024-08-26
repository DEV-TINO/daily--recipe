<template>
  <div class="bottom-nav">
    <div class="menu" v-for="(value, key, index) in bottomMenu"
      :key="index"
      @click="handleClickMenu(value)">
      <img class="image" :src="`src/images/${value}.jpg`" />
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            bottomMenu:['edit','home','search']
        }
    },
    methods: {
      handleClickMenu(menu) {
        if (menu === "edit") {
          this.$router.push("/edit");
        } else if (menu === "home") {
          this.$router.push("/home");
        } else if (menu === "search") {
          this.$router.push("/search");
        }
      },
    },
};
</script>

<style scoped>
    .bottom-nav {
        width: 100%;
        height: 80px;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        box-shadow: 0px -2px 4px #ffc999;
        gap: 50px;
        background-color: #fff;
    }
    .menu {
        width: 45px;
        height: 48px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .image {
        width: 70px;
        height: 50px;
    }

    
</style>