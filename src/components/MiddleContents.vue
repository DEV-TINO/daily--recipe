<template>
  <div id="middlecontents">
  <div id="minithumbnail"></div>
  <div class="infocontainer">
    <div id="dateandname"><div class="date">yyyy-mm-dd</div><div class="middleusername">username</div></div>
    <div class="title">title</div>
    <div class="discription">subtitle</div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#minithumbnail{
  width: 100px;
  height: 100px;
}
#dateandname{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
#middlecontents{
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 20px;
}
.infocontainer{
  margin-left: 10px;
}
.middleusername{
  text-align: right;
  font-size: 14px;
}
.date{
  font-size: 10px;
}

</style>