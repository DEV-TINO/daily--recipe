<template>
  <div class="middle-contents">
    <div class="simple-thumbnail"></div>
    <div class="middle-info-container">
      <div class="date-name">
        <div class="date">yyyy-mm-dd</div>
        <div class="middle-user-name">username</div>
      </div>
      <div class="title">title</div>
      <div class="discription">subtitle</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.middle-contents {
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 20px;
}
.date-name {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.middle-info-container {
  margin-left: 10px;
}
.middle-user-name {
  text-align: right;
  font-size: 14px;
}
.date {
  font-size: 10px;
}
</style>