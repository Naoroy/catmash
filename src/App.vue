<template>
  <div id="app">
    <nav>
      <button @click="refreshMash"> Mash </button>
      <button @click="mashPage=false"> List </button>
    </nav>

    <Mash v-on:refresh="refreshMash" v-show="mashPage" :images="comparedImages"></Mash>
    <List v-show="!mashPage" :images="images"></List>
  </div>
</template>

<script>
import List from './List.vue'
import Mash from './Mash.vue'

const PORT = process.env.PORT || 4000

export default {
  name: 'app',
  components: {
    Mash,
    List
  },
  data: () => ({
    mashPage: true,
    images: [],
    comparedImages: []
  }),
  methods: {
    getUrls(callback) {
      const url = 'http://localhost:'+PORT
      const xhr = new XMLHttpRequest()
      xhr.onload = (result) => {
        const data = JSON.parse(result.target.response)
        data.forEach((img) => { this.images.push(img) })
        callback()
      }
      xhr.open('GET', url)
      xhr.send()
    },
    randomNumber() {
      const random = () => Math.floor(Math.random() * 101)
      const a = random()
      const b = random()

      return a !== b ? { a, b } : this.randomNumber()
    },
    findTwoUrls() {
      const { a, b } = this.randomNumber()

      this.comparedImages = [
        this.images[a],
        this.images[b]
      ]
    },
    refreshMash() {
      this.mashPage=true
      this.findTwoUrls()
      // console.log(this.comparedImages[0].id)
    }
  },
  beforeMount() {
    //do something before mounting vue instance
    this.getUrls(this.findTwoUrls)
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5% auto;
  width: 65vw;
  // background: grey;
}

nav {
  display: flex;
  padding-bottom: 5vh;
  // flex-direction: column;
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
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
