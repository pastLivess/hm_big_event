<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { login } from '@/service'
export default {
  name: 'App',
  mounted() {
    login().then((res) => {
      console.log(res)
    })
  },
}
</script>

<style scoped lang="less"></style>
