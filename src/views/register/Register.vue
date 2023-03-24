<template>
  <div class="register">
    <div class="reg-box">
      <div class="title-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
}
</script>

<style scoped lang="less">
.register {
  background-image: url('@/assets/images/login_bg.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  .reg-box {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 200px;
    height: 200px;
    background-color: #fff;
    .title-box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 10px auto;
      background-image: url('@/assets/images/login_title.png');
      background-repeat: no-repeat;
      background-size: contain;
      width: 100px;
      height: 20px;
    }
  }
}
</style>
