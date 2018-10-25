<template>
  <div id="mash">
    <h2>Which the cutest ?</h2>
    <div class="container">
      <div :id="img.id" class="box" v-for="img in imgs" v-bind:key="img.id">
        <img class="cat-pic" :src="img.url" width="300px">
        <button class="like-btn" @click="like($event)"> You're the cutest! </button>
        <!-- <a :href="img.url"> {{ img.url }}</a> -->
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
  },
  methods: {
    registerLike(element) {
      console.log(element.id)
    },
    like(event) {
      const element = event.target.parentElement
      this.registerLike(element)
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="scss" scoped>

.like-btn {
  position: absolute;
  bottom: 0;
  left:0;
  width: 100%
}
a {
  position: absolute;
  top: 20px;
  left: 0
}
.box {
  position: relative;
  width: 30vw;
  height: 60vh;
  border-radius: 2%;
  box-shadow: 3px 7px 13px -3px black;
  overflow: hidden;
}
.box img {
  max-width: 92%;
  max-height: 95%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  // transform: scale(2,2);
}
</style>
