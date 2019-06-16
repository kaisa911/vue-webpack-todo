<template>
  <div class="base-wrap">
    <div class="settle-part">
      <Logo/>
      <inputPart
        :vCodeURL="vCodeURL"
        @changeVerifyCode="changeVerifyCode"
        @checkEmail="checkEmail"
        @checkVerifyCode="checkVerifyCode"
        @checkPassword="checkPassword"
        :options="options"
        @rememberPassword="rememberPassword()"
        @userLogin="userLogin"
        @handleFocus="handleFocus"
        @handleBlur="handleBlur"
        :loginWarin="loginWarin"
        :form="form"
      />
      <OtherPage @toForgetPassword="toForgetPassword" @toRegister="toRegister"/>
    </div>
    <Swiper class="bg" ref="swiper"/>
  </div>
</template>
<script>
// import showVerifyCode from "../../assets/verifyCode.js";
import Swiper from "./Swiper/index.vue";
import Logo from "./logo.vue";
import OtherPage from "./toOtherPage.vue";
import inputPart from "./inputPart.vue";
import { message } from "ant-design-vue";
export default {
  components: {
    Logo,
    inputPart,
    OtherPage,
    Swiper
  },
  data: () => ({
    email: "",
    verifyCode: "",
    password: "",
    vCode: "",
    vCodeURL: "",
    loginWarin: "",
    options: {
      email: 0,
      password: 0,
      verifyCode: 0
    },
    rememberFlag: false,
    form: {
      username: "",
      password: ""
    }
  }),
  methods: {
    handleFocus() {
      this.$refs.swiper.stop();
    },
    handleBlur() {
      this.$refs.swiper.go();
    },
    //记住密码
    rememberPassword(flag = true) {
      this.rememberFlag = flag;
    },
    // 校验邮箱
    checkEmail(e) {
      this.email = e || "";
      const email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!email.test(this.email)) {
        this.options.email = 1;
        return;
      }
      this.options.email = 0;
    },
    // 校验密码
    checkPassword(e) {
      this.password = e || "";
      if (this.password.length < 6) {
        this.options.password = 1;
        return;
      }
      this.options.password = 0;
    },

    //校验验证码
    checkVerifyCode(e) {
      this.verifyCode = e || "";
      if (this.verifyCode.length <= 0) {
        this.options.verifyCode = 1;
        return;
      }
      this.options.verifyCode = 0;
    },
    // 跳转到注册页面
    toRegister() {
      this.$router.push("/register/add-info");
    },

    // 跳转到忘记密码页
    toForgetPassword() {
      this.$router.push("/forget-password");
    },

    // //设置验证码
    // setCode() {
    //   const result = showVerifyCode.create(this.vCode);
    //   this.vCodeURL = result.dataURL;
    // },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.form.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.form.password = arr2[1];
          }
        }
      }
      this.email = this.form.username;
      this.password = this.form.password;
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },

    async userLogin() {
      console.log("0000");
      const checkArr = ["checkEmail", "checkVerifyCode", "checkPassword"];
      const dataArr = ["email", "verifyCode", "password"];
      checkArr.forEach((item, index) => {
        this[[item]](this[dataArr[index]]);
      });
      console.log(Object.values(this.options).includes(1));
      if (Object.values(this.options).includes(1)) {
        return;
      }
      if (this.rememberFlag) {
        this.setCookie(this.email, this.password, 7);
      } else {
        this.clearCookie();
      }

      const reqBody = {
        userName: this.email,
        password: this.password,
        verifyCode: this.verifyCode
      };
      const { code, success, message: msg, data } = await this.$request.post(
        this.$api.userLogin,
        reqBody
      );
      if (code !== 200 && !success) {
        this.loginWarin = msg;
        return;
      }
      const { host, protocol } = window.location;
      const url = `${protocol}//${host}/projectDepository.html#/`;
      window.open(url, "_self");
    },
    changeVerifyCode() {
      this.getVerifyCode();
    },
    async getVerifyCode() {
      const { code, success, message: msg, data } = await this.$request.post(
        this.$api.getVerifyCode
      );
      if (code !== 200 && !success) {
        message.destroy();
        message.error(msg);
        return;
      }
      this.vCode = data.verifyCode;
      this.setCode();
    }
  },
  computed: {
    emailWarn() {
      const email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (this.userName !== "" && !email.test(this.userName)) {
        return "！格式输入不正确，请修改";
      }
    }
  },

  created() {
    this.getVerifyCode();
    this.getCookie();
  }
};
</script>
<style lang="less" scoped>
.base-wrap {
  width: 100%;
  height: 100vh;
  .settle-part {
    z-index: 20;
    position: relative;
    height: 100%;
    background: rgba(255, 255, 255, 0);
  }
  .bg {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

