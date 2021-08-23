<!--
 * @Author: your name
 * @Date: 2021-06-06 20:40:04
 * @LastEditTime: 2021-08-23 14:49:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \token\src\App.vue
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about" :md5="'23'">About</router-link>
  </div>
  <router-view />
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
export default {
  name: 'App'
}
function token (salt, num = 0) {
  const date = Date.now()
  const minute = Math.floor(date / 30000) + num
  const tokenStr = md5(minute + salt)
  const __token = parseInt(tokenStr, 16) % 1000000 + ''
  return __token.padStart(6, '0')
}
function ifToken (salt, __token, errorValue = 4) {
  let __errorValue = -errorValue - 1
  const maxErrorValue = errorValue
  while (__errorValue++ !== maxErrorValue) {
    if (token(salt, __errorValue) === __token) {
      return true
    }
  }
  return false
}
console.log(ifToken(token('11'), '123'))
</script>
