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
<style lang="less" scoped>
.carousel-wrap {
  height: 100vh;
  width: 50%;
  overflow: hidden;
  background-color: #fff;
  z-index: 5;
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
  transform: translateY(100%);
}

.list-enter {
  transform: translateY(-100%);
}

.list-leave {
  transform: translateY(0);
}
</style>
