<template>
  <div id="list">
    <div v-for="img in images" :key="img.id">
      <img :src="img.url">
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.picture {
  position: relative;
  box-shadow: 3px 4px 12px -2px;
  width: 25vw;
  height: 20vw;
}

#list img {
  opacity: .6;
  width: 65%;
  margin: auto;
  transition: visibility 0s 2s, 400ms;
  position: relative;
  top: 0%;
  transform: translateY(30%);
}

#list img:hover {
  opacity: 1;
  width: 80%;
  transition: visibility 0s 2s, 400ms;
  position: relative;
  transform: translateY(0);
}

.like {
  position: absolute;
  bottom: 4%;
  right : 2%
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
