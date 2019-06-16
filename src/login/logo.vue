<template>
  <div class="logo" :style="handleSite">
    <img src="./images/logo.png" alt="logo" :style="handleHeight">
  </div>
</template>
<script>
const clientWidth = document.body.clientWidth / 1920;
export default {
  data: () => ({
    height: 0,
    fontSize: 0
  }),
  computed: {
    handleHeight() {
      return `height:${clientWidth * 40}px;width:${clientWidth * 250}px`;
    },
    handleSite() {
      return `top:${clientWidth * 61}px;right:${clientWidth * 89}px`;
    }
  }
};
</script>

<style lang="less" scoped>
.logo {
  position: absolute;
}
</style>
