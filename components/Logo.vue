<template>
  <div>
    <nuxt-link to="/">
    <img class="logo" v-if="hori" src="/logo2.png" />
      <img class="logo" v-else src="/logo1.png" />
      
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    // 是否横向
    hori: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.logo {
  width: 160px;
  height: 120px;
}
</style>