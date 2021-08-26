<!--
 * @Author: your name
 * @Date: 2021-06-06 20:40:04
 * @LastEditTime: 2021-08-26 22:48:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \token\src\views\About.vue
-->
<template>
  <div class="about">
    <h1>令牌:{{md5}}</h1>
    <p>
      23
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    md5: {
      type: String
    }
  }
}
</script>
