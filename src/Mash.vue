<template>
  <div id="mash">
    <div v-for="img in imgs" v-bind:key="img.id">
      <img class="cat-pic" :src="img.url">
      <button> like </button>
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#column {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
