<template>
  <div class="input-wrap" :style="handleSite">
    <div class="left">
      <div class="row" :style="handleRowStyle">
        <div class="col" :style="handleColStyle">
          <div>
            <input
              class="input-item"
              type="text"
              :style="handleInputStyle"
              placeholder="请输入用户名"
              v-model="email"
              @change="$emit('checkEmail',email)"
              @focus="$emit('handleFocus')"
              @blur="$emit('handleBlur')"
            >
            <div style="font-size:10px">{{options.email===1?"请输入正确的用户名":""}}</div>
          </div>
        </div>
        <div class="col" :style="handleColStyle">
          <div>
            <input
              class="input-item"
              type="password"
              :style="handleInputStyle"
              placeholder="请输入密码"
              v-model="password"
              @input="$emit('checkPassword',password)"
              @focus="$emit('handleFocus')"
              @blur="$emit('handleBlur')"
            >
            <div style="font-size:10px">{{options.password===1?"请输入密码":""}}</div>
          </div>
        </div>
      </div>
      <div class="row" :style="handleRowStyle">
        <div class="col" :style="handleColStyle">
          <div>
            <input
              type="text"
              class="input-item"
              :style="handleVerifyStyle"
              placeholder="请输入验证码"
              v-model="verifyCode"
              @input="$emit('checkVerifyCode',verifyCode)"
              @focus="$emit('handleFocus')"
              @blur="$emit('handleBlur')"
            >
            <div style="font-size:10px">{{options.verifyCode===1?"请输入验证码":""}}</div>
          </div>

          <div class="verifycode" @click="$emit('changeVerifyCode')" style="cursor:pointer">
            <img :src="vCodeURL" alt="验证码" :style="handleImgStyle">
            <div class="change-verify" :style="handleChangeStyle">换一张</div>
          </div>
        </div>
        <div
          :class=" ['col remember',remember ? 'white':'']"
          :style="handleColStyle"
          style="cursor:pointer"
          @click="handleToggleRemember"
        >
          <img src="./images/checkbox.png" alt="checkbox" :style="handleCheckbox">
          <img src="./images/nike.png" alt="nike" :style="handleCheckbox2" v-if="remember">
          <div :style="handleRememberStyle">记住密码</div>
        </div>
      </div>
    </div>
    <div class="right" :style="handleRightSiteStyle">
      <div class="button" :style="handleButtonStyle" @click="handleUserLogin">登录</div>
      <div class="warnInfo">{{loginWarin}}</div>
    </div>
  </div>
</template>
<script>
const clientWidth = document.body.clientWidth / 1920;
export default {
  data: () => ({
    email: "",
    password: "",
    verifyCode: "",
    remember: true
  }),
  props: {
    vCodeURL: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    loginWarin: {
      type: String,
      required: true
    }
  },
  watch: {
    options: function() {
      return this.$props.options;
    },
    loginWarin: function() {
      return this.$props.loginWarin;
    },
    form: function() {
      // console.log(this.$props.form, "22222");
      // this.email = this.$props.form.username;
      // this.password = this.$props.from.password;
    }
  },
  computed: {
    handleButtonStyle() {
      const height = clientWidth * 60;
      const width = clientWidth * 200;
      const fontSize = clientWidth * 18;
      return `height:${height}px;width:${width}px;font-size:${fontSize}px;
      line-height:${height}px`;
    },
    handleRightSiteStyle() {
      const height = clientWidth * 60;
      const marginTop = clientWidth * 23;
      const width = clientWidth * 200;
      const marginLeft = clientWidth * 91;
      return `height:${height}px;width:${width}px;cursor:pointer;
      margin-top:${marginTop}px;margin-left:${marginLeft}px`;
    },
    handleCheckbox() {
      const height = clientWidth * 16;
      const marginTop = clientWidth * 17;
      const marginRight = clientWidth * 10;

      return `height:${height}px;width:${height}px;
      margin-top:${marginTop}px;margin-right:${marginRight}px`;
    },
    handleCheckbox2() {
      const height = clientWidth * 14;
      const marginTop = clientWidth * 17;
      const marginLeft = clientWidth * 22;
      const marginRight = clientWidth * 10;

      return `height:${height}px;width:${height}px;
      margin-top:${marginTop}px;margin-left:${-marginLeft}px;margin-right:${marginRight}px`;
    },
    handleRememberStyle() {
      const Height = clientWidth * 37;
      const lineHeight = clientWidth * 27;
      const fontSize = clientWidth * 18;
      const width = clientWidth * 218;
      const marginTop = clientWidth * 10;
      return `line-height:${lineHeight}px; font-size:${fontSize}px;
       height:${Height}px;width:${width}px;margin-top:${marginTop}px`;
    },
    handleChangeStyle() {
      const fontSize = clientWidth * 12;
      return `font-size:${fontSize}px`;
    },
    handleImgStyle() {
      const width = clientWidth * 84;
      const height = clientWidth * 37;
      return `height:${height}px;width:${width}px;`;
    },
    handleSite() {
      const top = clientWidth * 320;
      return `top:${top}px;right:${clientWidth * 89}px`;
    },
    handleRowStyle() {
      const Height = clientWidth * 63;
      const Width = clientWidth * 474;
      return `height:${Height}px;width:${Width}px;`;
    },
    handleColStyle() {
      const marginRight = clientWidth * 37;
      const width = clientWidth * 218;
      return `margin-right:${marginRight}px;width:${width}px`;
    },
    handleInputStyle() {
      const Height = clientWidth * 37;
      const lineHeight = clientWidth * 27;
      const fontSize = clientWidth * 18;
      const width = clientWidth * 218;
      return `line-height:${lineHeight}px; font-size:${fontSize}px;
       height:${Height}px;width:${width}px`;
    },
    handleVerifyStyle() {
      const Height = clientWidth * 37;
      const lineHeight = clientWidth * 27;
      const fontSize = clientWidth * 18;
      const width = clientWidth * 134;
      return `line-height:${lineHeight}px; font-size:${fontSize}px;
      height:${Height}px;width:${width}px`;
    }
  },
  methods: {
    handleToggleRemember() {
      this.remember = !this.remember;
      this.$emit("rememberPassword", this.remember);
    },
    handleUserLogin() {
      this.$emit("userLogin");
    },
    setCookies() {
      this.email = this.$props.form.username;
      this.password = this.$props.form.password;
    }
  },
  created() {
    this.setCookies();
  }
};
</script>
<style lang="less" scoped>
.input-wrap {
  position: absolute;
  display: flex;
  flex-direction: column;
  .left .row {
    display: flex;
    flex-direction: column;
    .col {
      display: flex;
      .input-item {
        font-family: PingFangSC-Regular;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
        background: rgba(255, 255, 255, 0);
        outline: none;
        border: none;
        border-bottom: 1px solid #fff;
      }
      input::placeholder {
        font-family: PingFangSC-Regular;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
    .remember {
      font-family: PingFangSC-Regular;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #d7d7d7;
      position: relative;
    }
    .remember:hover {
      color: #fff;
    }
    .white {
      color: #fff;
    }
  }
}
.change-verify {
  font-family: PingFangSC-Regular;
  font-weight: normal;
  font-stretch: normal;
  line-height: 29px;
  letter-spacing: 0px;
  color: #d7d7d7;
  text-align: right;
}
.button {
  font-family: PingFangSC-Regular;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  border-radius: 30px;
  border: solid 2px #ffffff;
  text-align: center;
}
.warnInfo {
  text-align: center;
  margin: 10px;
}
</style>

