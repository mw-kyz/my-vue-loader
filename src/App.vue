<template>
  <div>
    <div>
      <img class="img" v-if="showImg1" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F01%2F21092411545CQ2-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649648344&t=18f68c3c5893fe7c39065f89e15598d5">
      <img class="img" v-show="showImg2" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F210925010003G64-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649648359&t=a6fc6227f38df779b08b3e6a44f6e098">
    </div>
    <button @click="clickShowImg1">show img1</button>
    <button @click="clickShowImg2">show img2</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showImg1: true,
      showImg2: true
    }
  },
  methods: {
    clickShowImg1() {
      this.showImg1 = !this.showImg1
    },
    clickShowImg2() {
      this.showImg2 = !this.showImg2
    }
  }
}
</script>

<style>
.img {
  width: 200px;
}
</style>