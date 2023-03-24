<template>
  <div class="register">
    <div class="reg-box">
      <div class="title-box"></div>
      <div class="content">
        <el-form :model="info">
          <el-form-item>
            <el-input
              v-model="info.username"
              placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              show-password
              v-model="info.password"
              placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              show-password
              v-model="info.rePassword"
              placeholder="请再次确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="registerClick">注册</el-button>
            <el-link type="info">去登录</el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { getRegister } from '@/service'
export default {
  name: 'register',
  data() {
    return {
      info: {
        username: '',
        password: '',
        rePassword: '',
      },
    }
  },
  methods: {
    registerClick() {
      console.log(this.info)
    },
  },
}
</script>

<style scoped lang="less">
.register {
  background-image: url('@/assets/images/login_bg.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .reg-box {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background-color: #fff;
    overflow: hidden;
    .title-box {
      background-image: url('@/assets/images/login_title.png');
      background-repeat: no-repeat;
      background-size: contain;
      margin: 15px auto;
      width: 200px;
      height: 50px;
    }
  }
  .content {
    // width: 100px;
    flex-grow: 1;
    padding: 0 30px;
    .el-button--primary {
      width: 100%;
    }
  }
}
</style>
