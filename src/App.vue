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
// function token (salt, num = 0) {
//   const date = Date.now()
//   const minute = Math.floor(date / 60000) + num
//   const tokenStr = md5(minute + salt)
//   const __token = parseInt(tokenStr, 16) % 1000000
//   return __token
// }

// console.log(token('123'))

console.log(md5('123'))

// function ifToken (salt, __token, errorValue = 2) {
//   let __errorValue = -errorValue
//   const maxErrorValue = errorValue + 1
//   while (__errorValue++ !== maxErrorValue) {
//     if (token(salt, __errorValue) === __token) {
//       return true
//     }
//   }
//   return false
// }

// console.log(ifToken('111', token('111')))
</script>
