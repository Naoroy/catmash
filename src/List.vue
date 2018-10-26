<template>
  <div id="list">
    <div class="container">
      <div class="card" v-for="img in images" :key="img.id">
        <img :src="img.url">
        <div class="stats">
          <p> likes: {{ img.total_likes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: { 'images': Array },
  data: () => ({ })
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  flex: 1 0 20%;
  position: relative;
  width: 300px;
  height: 40vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
  box-shadow: 4px 4px 13px -3px black;
}
.card img {
  width: 100%;
}
.stats {
  position: absolute;
  bottom: 0;
  right : 0;
  width: 100%;
  padding: 2%;
  background: #333;
  color: beige;
}
</style>
