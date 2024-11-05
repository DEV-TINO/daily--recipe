<template>
  <div class="intro-viewer" @click="handleClickTouchToStart()">
    <div class="intro-container">
      <img class="icon" src="/images/loginicon.png">
      <div class="title">touchtostart</div>
      <div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickTouchToStart() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss">
.intro-viewer {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #FEF5ED;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.intro-container {

  .icon {
    height: 229px;
    width: 205px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
}
</style>