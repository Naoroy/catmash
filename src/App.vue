<template>
  <div id="app">
    <h2>cats...</h2>
    <nav>
      <button @click="refreshMash"> Mash </button>
      <button @click="refreshImages"> List </button>
    </nav>
    <Mash v-show="mashPage" v-on:like="handleLike($event)" :images="comparedImages"></Mash>
    <List v-show="!mashPage" :images="images"></List>
  </div>
</template>

<script>
import List from './List.vue'
import Mash from './Mash.vue'

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
    ajax(method, url, callback) {
      const xhr = new XMLHttpRequest()

      xhr.onload = callback
      xhr.open('GET', url)
      xhr.send()
    },
    getUrls(callback) {
      const url = 'https://calm-citadel-31631.herokuapp.com/'
      this.ajax('GET', url, (result) => {
        const data = JSON.parse(result.target.response)
        data.forEach((img) => { this.images.push(img) })
        return callback ? callback() : null
      })
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
    },
    refreshImages() {
      this.mashPage=false
      this.images = []
      this.getUrls()
    },
    handleLike(id) {
      const url = `https://calm-citadel-31631.herokuapp.com/like?id=${id}`
      
      this.ajax('GET', url, () => {
        this.findTwoUrls()
      })
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
  padding: 0;
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 6% auto;
  width: 70%;
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
