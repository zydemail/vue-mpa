<template>
  <div>
    <Header />
    <h1 @click="getInfo">This is index page</h1>
    <a href="/user/index">用户主页</a><br>
    <a href="/about.html">关于</a>
  </div>
</template>
<style lang="less">
</style>
<script>
import * as http from '@/utils/core/http'
import '@/style/index.less'
import Header from '@/components/header/header.vue'

export default {
  components: {
    Header
  },
  methods: {
    // 接口调用示例
    async getInfo () {
      const params = {
        test: 'test'
      }
      const result = await http.post('/test', params)
      console.log(result)
    }
  }
}
</script>
