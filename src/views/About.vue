<template>
  <div class="about">
    <h1>令牌:{{md5}}</h1>
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
