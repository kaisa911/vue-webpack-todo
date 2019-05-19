<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class="slide-ul" name="list">
      <li v-for="(list,index) in slideList" :key="`${list}+${index}`" v-show="index===currentIndex">
        <a :href="list.clickUrl">
          <img :src="list.image" :alt="list.desc">
        </a>
      </li>
    </transition-group>
    <!-- <div class="carousel-items">
      <span
        v-for="(item,index) in slideList.length"
        :class="{'active':index===currentIndex}"
        @click="change(index)"
        :key="index"
      ></span>
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      required: true
    },
    slideList: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    // slideList: [
    //   {
    //     clickUrl: "#",
    //     desc: "nhwc",
    //     image: "http://dummyimage.com/1745x492/f1d65b"
    //   },
    //   {
    //     clickUrl: "#",
    //     desc: "hxrj",
    //     image: "http://dummyimage.com/1745x492/40b7ea"
    //   },
    //   {
    //     clickUrl: "#",
    //     desc: "rsdh",
    //     image: "http://dummyimage.com/1745x492/e3c933"
    //   }
    // ],
    // currentIndex: 0,
    timer: ""
  }),

  beforeUpdate() {
    // console.log(this.$props.aaa);
    // if (this.$props.aaa) {
    //   this.stop();
    // }
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.$emit("resetA");
      this.stop();
      this.currentIndex = index;
    },

    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0;
      }
    }
  },
  created() {
    // this.$nextTick(() => {
    //   this.timer = setInterval(() => {
    //     this.autoPlay();
    //   }, 4000);
    // });
  }
};
</script>

<style lang="stylus" scoped>
.carousel-wrap {
  height: 100vh;
  width: 50%;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0px;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
  top: -16px;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  height: 26px;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 26px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}

.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 2s ease;
  transform: translateY(0);
}

.list-leave-active {
  transition: all 2s ease;
  transform: translateY(-100%);
}

.list-enter {
  transform: translateY(100%);
}

.list-leave {
  transform: translateY(0);
}
</style>
