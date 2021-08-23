<!--
 * @Descripttion:
 * @version:
 * @Author: CK
 * @Date: 2021-06-06 20:40:04
 * @LastEditors: CK
 * @LastEditTime: 2021-08-23 15:38:18
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
import genToken from 'tools/token'
export default {
  name: 'App'
}
console.log(genToken)
</script>
