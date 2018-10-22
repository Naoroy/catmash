<template>
  <div id="app">
    <Column></Column>
    <div>
      <img v-for="img in images" :src="img.url" alt="">
    </div>
  </div>
</template>

<script>
import Column from './Column.vue'

const PORT = process.env.PORT || 5000

export default {
  name: 'app',
  components: {
    Column
  },
  data: () => ({
    images: []
  }),
  methods: {
    getUrls() {
      const url = 'http://localhost:'+PORT
      const xhr = new XMLHttpRequest()
      xhr.onload = (result) => {
        const data = JSON.parse(result.target.response)
        data.forEach((img) => {
          this.images.push(img)
        })
      }
      xhr.open('GET', url)
      xhr.send()
    }
  },mounted() {
    //do something after mounting vue instance
    this.getUrls()
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
  margin: 10% auto;
  width: 62%;
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
