<template>
  <div class="large-content-view">
    <div class="large-thumbnail"></div>
    <div class="contents">
      <div class="title">title</div>
      <div class="discription">discriptions</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.large-content-view {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 180px 0fr;
}
.large-thumbnail {
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #999999;
}
</style>