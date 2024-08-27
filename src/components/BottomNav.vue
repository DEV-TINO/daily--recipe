<template>
  <div class="bottom-nav">
    <div class="menu" v-for="(value, key, index) in bottomMenu"
      :key="index"
      @click="handleClickMenu(value.label)">
      <img :class="activeIndex === value.label ? `clickedicon`:`icon`" :src="activeIndex === value.label ? value.activeIcon : value.inactiveIcon">
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          activeIndex: 0,
          bottomMenu:[
            {
              label:'edit',
              activeIcon: 'src/images/editclicked.jpg',
              inactiveIcon: 'src/images/edit.jpg',
            },
            {
              label: 'home',
              activeIcon: 'src/images/homeclicked.jpg',
              inactiveIcon: 'src/images/home.jpg',
            },
            {
              label:'search',
              activeIcon: 'src/images/searchclicked.jpg',
              inactiveIcon: 'src/images/search.jpg',
            }
          ],
        }
    },
    methods: {
      handleClickMenu(menu) {
        this.activeIndex = menu;
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
        gap: 70px;
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

    .icon {
        width: 70px;
        height: 50px;
    }
    .clickedicon{
      width: 93px;
      height: 71px;
    }

    
</style>