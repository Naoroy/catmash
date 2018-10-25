<template>
  <div id="list">
    <div class="container">
      <div class="card" v-for="img in images" :key="img.id">
        <img :src="img.url">
        <div class="stats">
          <p > likes: 9000</p>

        </div>
        <!-- <a :href="img.url"> {{ img.url }}</a> -->
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
//   background: blue;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;

}
.stats {
  position: absolute;
  bottom: 3%;
  background: lightblue;
  width: 100%;
  box-shadow: 2px 2px 11px black
}
.stats p {
  text-align: right;
  margin: 0 5%;
}
.card {
  width: 30vw;
  height: 20vw;
  flex: 1 0 200px;
  position: relative;
  overflow: hidden;
  box-shadow: 3px 7px 13px -3px black;
  margin: 2%;
  border-radius: 2%;
}
.card img {
  max-width: 92%;
  max-height: 95%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  // transform: scale(2,2);
}
.like {
  position: absolute;
  bottom: 4%;
  right : 2%
}
// .picture {
//   position: relative;
//   box-shadow: 3px 4px 12px -2px;
//   width: 25vw;
//   height: 20vw;
// }

// #list img {
//   opacity: .6;
//   width: 65%;
//   margin: auto;
//   transition: visibility 0s 2s, 400ms;
//   position: relative;
//   top: 0%;
//   transform: translateY(30%);
// }

// #list img:hover {
//   opacity: 1;
//   width: 80%;
//   transition: visibility 0s 2s, 400ms;
//   position: relative;
//   transform: translateY(0);
// }
</style>
