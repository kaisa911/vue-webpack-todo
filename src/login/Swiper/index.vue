<template>
  <div class="swiper">
    <Scroll :slideList="slideList2" :currentIndex="currentIndex"/>
    <Scroll2 :slideList="slideList" :currentIndex="currentIndex"/>
    <Scroll3 :slideList="slideList3" :currentIndex="currentIndex" class="word"/>
    <div class="carousel-items" :style="setNavStyle">
      <span
        :style="setItemStyle"
        v-for="(item,index) in slideList.length"
        :class="{'active':index===currentIndex}"
        @click="change(index)"
        :key="index"
      >
        <transition name="line">
          <span class="line" v-show="index===currentIndex" :style="setLineStyle"/>
        </transition>
        {{`0${index+1}`}}
      </span>
    </div>
  </div>
</template>
<script>
import Scroll from "./scroll.vue";
import Scroll2 from "./scroll2.vue";
import Scroll3 from "./scroll3.vue";
import color1 from "../images/color1.png";
import color2 from "../images/color2.png";
import color3 from "../images/color3.png";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import Specialty from "../images/Specialty.png";
import rigorous from "../images/rigorous.png";
import security from "../images/security.png";

const clientWidth = document.body.clientWidth / 1920;
export default {
  components: {
    Scroll3,
    Scroll2,
    Scroll
  },
  data: () => ({
    slideList: [
      {
        clickUrl: "#",
        desc: "nhwc",
        image: color1
      },
      {
        clickUrl: "#",
        desc: "hxrj",
        image: color2
      },
      {
        clickUrl: "#",
        desc: "rsdh",
        image: color3
      }
    ],
    slideList2: [
      {
        clickUrl: "#",
        desc: "nhwc",
        image: pic1
      },
      {
        clickUrl: "#",
        desc: "hxrj",
        image: pic2
      },
      {
        clickUrl: "#",
        desc: "rsdh",
        image: pic3
      }
    ],
    slideList3: [
      {
        clickUrl: "#",
        desc: "nhwc",
        image: Specialty
      },
      {
        clickUrl: "#",
        desc: "hxrj",
        image: rigorous
      },
      {
        clickUrl: "#",
        desc: "rsdh",
        image: security
      }
    ],
    currentIndex: 0,
    timer: null
  }),
  computed: {
    setNavStyle() {
      const top = "47vh";
      return `top:${top}; `;
    },
    setLineStyle() {
      const marginTop = clientWidth * 8;
      return `margin-top: ${marginTop}px; `;
    },
    setItemStyle() {
      const marginBottom = clientWidth * 39;
      const fontSize = clientWidth * 22;
      const width = clientWidth * 112;
      const height = clientWidth * 22;
      return ` margin-bottom:${marginBottom}px;font-size:${fontSize}px;width:${width}px;height:${height}px`;
    }
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
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  }
};
</script>
<style lang="less" scoped>
.swiper {
  display: flex;
  position: relative;
  min-width: 1024px;

  .word {
    position: absolute;
    top: 17vh;
    left: 31vw;
  }
}

.carousel-items {
  position: absolute;
  z-index: 10;
  // top: 460px;
  width: 50px;
  height: 126px;
  margin: 0 auto;
  text-align: center;
}

.carousel-items span {
  text-align: right;
  display: inline-block;
  font-family: PingFangSC-Medium;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.4;
  cursor: pointer;
}

.carousel-items .active {
  opacity: 1;
  .line {
    display: inline-block;
    height: 1px;
    background: #fff;
    width: 70px;
    position: absolute;
    left: 0px;
  }
}
</style>
