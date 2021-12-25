<template>
    <div>
<!--        <router-view/>-->
        这里是测试
        <el-button type="primary">Primary</el-button>
        <el-calendar v-model="value"/>
    </div>
</template>

<script>
// 导入自定义hooks获取网络请求
import { useHttp } from './hooks/index'

import { ref } from 'vue'

export default {
  setup() {
    const { $http } = useHttp()

    const value = ref(new Date())

    const test = async () => {
      const data = await $http.test()
      console.log(data)
    }

    test()
    return {
      value
    }
  }
}
</script>

<style lang="less">
    div {
        color: @fontRed;
    }
</style>
