<template>
  <div class="buttons-wrap" :style="handleSite">
    <div class="forget" :style="handleStyle" @click="$emit('toForgetPassword')">忘记密码</div>
    <div class="register" :style="handleStyle" @click="$emit('toRegister')">新用户注册</div>
  </div>
</template>
<script>
const clientWidth = document.body.clientWidth / 1920;
export default {
  computed: {
    handleStyle() {
      const lineHeight = clientWidth * 29;
      const fontSize = clientWidth * 18;
      const marginRight = clientWidth * 36;

      return `line-height:${lineHeight}px;font-size:${fontSize}px;margin-right:${marginRight}px`;
    },
    handleSite() {
      const marginLeft = clientWidth * 84;
      const Bottom = clientWidth * 31;
      return `margin-left:${marginLeft}px ;bottom:${Bottom}px`;
    }
  }
};
</script>
<style lang="less" scoped>
.buttons-wrap {
  display: flex;
  position: absolute;
  .forget,
  .register {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 29px;
    letter-spacing: 1px;
    color: #d7d7d7;
    cursor: pointer;
  }
}
</style>


