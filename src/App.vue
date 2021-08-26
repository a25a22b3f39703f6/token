<!--
 * @Descripttion:
 * @version:
 * @Author: CK
 * @Date: 2021-06-06 20:40:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-23 16:58:04
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about" @click="startToken()">About</router-link>
  </div>
  <router-view :md5="tokenStr"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import md5 from 'js-md5'
import { genToken } from './tools/token'
export default {
  name: 'App',
  data () {
    return {
      yz: '123',
      tokenStr: '',
      tokenNum: 0
    }
  },
  methods: {
    /**
     * @test: 启动令牌生成计时器
     */
    startToken () {
      const tokenObj = genToken(this.yz, md5)
      this.tokenStr = tokenObj.token
      this.tokenNum = setTimeout(this.startToken, tokenObj.time)
    },
    /**
     * @test: 关闭令牌生成计时器
     */
    endToken () {
      clearTimeout(this.tokenNum)
    }
  }
}
</script>
