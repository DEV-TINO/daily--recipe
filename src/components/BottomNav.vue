<template>
  <div class="bottom-nav">
    <div class="bottom-nav-menu" v-for="(value, key, index) in bottomMenu"
      :key="index"
      @click="handleClickMenu(value.label)">
      <img :class="activeIndex === value.label ? `bottom-nav-clicked-icon`:`bottom-nav-icon`" :src="activeIndex === value.label ? value.activeIcon : value.inactiveIcon">
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: 0,
        bottomMenu: [
          {
            label:'edit',
            activeIcon: '/images/bottomnav/editclicked.jpg',
            inactiveIcon: '/images/bottomnav/edit.jpg',
          },
          {
            label: 'home',
            activeIcon: '/images/bottomnav/homeclicked.jpg',
            inactiveIcon: '/images/bottomnav/home.jpg',
          },
          {
            label:'search',
            activeIcon: '/images/bottomnav/searchclicked.jpg',
            inactiveIcon: '/images/bottomnav/search.jpg',
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
          this.$router.push("/");
        } else if (menu === "search") {
          this.$router.push("/search");
        }
      },
    },
};
</script>

<style>
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
.bottom-nav-menu {
  width: 45px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bottom-nav-icon {
  width: 70px;
  height: 50px;
}
.bottom-nav-clicked-icon {
  width: 93px;
  height: 72px;
}
</style>