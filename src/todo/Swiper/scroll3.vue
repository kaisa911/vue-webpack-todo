<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class="slide-ul" name="list">
      <li
        v-for="(list,index) in slideList"
        :key="`${list}+${index}`"
        v-show="index===handleCurrentIndex"
      >
        <a :href="list.clickUrl">
          <img :src="list.image" :alt="list.desc">
        </a>
      </li>
    </transition-group>
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
      type: Array,
      required: true
    }
  },
  computed: {
    handleCurrentIndex() {
      return this.$props.currentIndex;
    }
  }
};
</script>
<style lang="stylus" scoped>
.carousel-wrap {
  height: 15vh;
  width: 10vw;
  overflow: hidden;
  background: rgba(255, 255, 255, 0);
  z-index: 3;
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

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.list-enter-active {
  transition: all 1s ease 1s;
}

.list-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.list-enter {
  transform: translateY(-100px);
  opacity: 0;
}

.list-leave-to {
  transform: translateY(200%);
  opacity: 0;
}
</style>
