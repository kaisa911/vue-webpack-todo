<template>
  <div id="app">
    <!-- <div id="cover"></div> -->
    <!-- <Header/> -->
    <!-- <Todo/> -->
    <Swiper/>
    <!-- <div style="display:flex">
      <Scroll :aaa="changeSA" @resetA="resetA"/>
      <Scroll2 :aaa="changeSA" @resetA="resetA"/>
    </div>-->
    <!-- <button @click="changeAAA">dddd</button> -->
    <!-- <Footer/> -->
  </div>
</template> 

<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import Todo from "./todo/todo.vue";
import Swiper from "./todo/swiper/index.vue";
export default {
  components: {
    Header,
    Footer,
    Todo,
    Swiper
  },
  data: () => ({
    aaa: false
  }),
  methods: {
    changeAAA() {
      this.aaa = true;
    },
    resetA() {
      this.aaa = false;
      console.log("充值a：", this.aaa);
    }
  },
  computed: {
    changeSA() {
      console.log("fathera:", this.aaa);
      return this.aaa;
    }
  }
};
</script>

<style lang="stylus">
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #999;
  opacity: 0.8;
  z-index: -1;
}
</style>
