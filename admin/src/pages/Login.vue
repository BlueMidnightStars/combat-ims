<template>
  <div class="components-layout-demo-basic">
    <a-layout class="login-section">
      <a-layout-content class="login-container">
        <div class="login-input-container">
          <img class="kigin-logo" src="@/image/logo.png">
          <p class="login-input-title">
            极客信息发布管理
          </p>
          <div class="login-phone-input">
            <a-input v-model="phone" placeholder="手机号码" />
          </div>
          <div class="login-code-input">
            <a-input type="password" v-model="password" placeholder="登录密码" />
          </div>
          <div class="buttom-container">
            <a-button class="login-buttom" type="primary" @click="login">登录</a-button>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import user from '@/models/user';

export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  created: function () {
    let token = localStorage.getItem('token');
    if(token != null){
      this.$router.push({name: 'user'})
    }
  },
  components: {
  },
  methods: {
    // eslint-disable-next-line
    login:function() {
      console.log(this.password, this.phone);
      let password = this.password;
      let phone = this.phone;
      if(!phone || !password){
        return alert('请输入账号与密码')
      }
      user.login({phone:phone,password:password}).then(res => {
        console.log(res)
        if(res.data.code == 200){
          localStorage.setItem('token',res.data.token);
          this.$router.push({name: 'user'})
        }
      }).catch(err => {
        console.log(err);
      })
    },
  },
};
</script>
<style lang="less">
.components-layout-demo-basic{
  height: 100%;
  width: 100%;
  display:flex;
  justify-content: center;
  .ant-layout-content {
    background: rgba(16, 142, 233, 1);
    color: #fff;
    display:flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    .login-input-container{
      width: 360px;
      height: 320px;
      background-color: #fff;
      border-radius: 3px;
      padding: 30px;
      text-align: left;
      .kigin-logo{
        width: 100px;
        height: 58px;
        margin-left: 0;
      }
      .login-input-title{
        color: #333;
        text-align: center;
        margin-top: 30px;
        font-size: 18px;
        font-weight: 500;
      }
      .login-phone-input{
        margin-bottom: 20px;
      }
      .buttom-container{
        padding-top: 20px;
        text-align: center;
        .login-buttom{
          width: 100px;
        }
      }
    }
  }
}
</style>
