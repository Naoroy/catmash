<template>
  <div id="column">
    <Picture></Picture>
    <Picture></Picture>
    <Picture></Picture>
  </div>
</template>

<script>
import Picture from './Picture.vue'
export default {
  name: 'column',
  components: {
    Picture
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
