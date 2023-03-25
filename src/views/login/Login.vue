<template>
  <div class="login">
    <div class="reg-box">
      <div class="title-box"></div>
      <div class="content">
        <el-form ref="form" :model="info" :rules="rulesObj">
          <el-form-item prop="username">
            <el-input
              v-model="info.username"
              placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              show-password
              v-model="info.password"
              placeholder="请输入密码"></el-input>
          </el-form-item>
          <slot></slot>
          <el-form-item>
            <el-button type="primary" @click="loginClick">登录</el-button>
            <el-link type="info" @click="goRegPage">去注册</el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin } from '@/service'
export default {
  name: 'login',
  data() {
    const samePwdFn = (rule, value, callback) => {
      if (value !== this.info.password) {
        callback(new Error('两次输入的密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      info: {
        username: '',
        password: '',
      },
      rulesObj: {
        //  校验对象
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            pattern: /^[0-9a-zA-Z]{1,10}$/,
            message: '用户名必须是1-10的大小写字母数字',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur',
          },
        ],
        rePassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur',
          },
          { validator: samePwdFn, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    loginClick() {
      this.$refs.form.validate(async (valid) => {
        // 验证通过
        if (valid) {
          const res = await getLogin(this.info) // 登录成功获取到token
          if (res.data.code !== 0) {
            // 失败
            return this.$message.error(res.data.message)
          }
          // 成功 发送请求存储token
          this.$store.dispatch('updateToken', res.data.token)
          this.$message.success(res.data.message)
          console.log(res)
        } else {
          return false
        }
      })
    },
    goRegPage() {
      this.$router.push('/register')
    },
  },
}
</script>

<style scoped lang="less">
.login {
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
