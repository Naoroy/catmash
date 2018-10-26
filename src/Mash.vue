<template>
  <div id="mash">
    <div class="container">
      <div class="card" v-for="img in imgs" v-bind:key="img.id">
        <img :src="img.url">
        <button class="like-btn"> like </button>
      </div>
    </div>
  </div>
</template>

<script>
export default  {
  name: 'mash',
  props: { 'images': Array },
  data: () => ({

  }),
  computed: {
    imgs() { return this.images }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  // width: 100%;
  // margin: auto;
}
.card {
  flex: 1 0 200px;
  position: relative;
  width: 100%;
  height: 40vh;
  // border: solid blue 1px;
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
.like-btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #FD6690;
  border: none
}
.like-btn:hover {

  background: #FD8890;
}
</style>
