<template>
<div>
  <Header></Header>
  <router-view></router-view>
  <Test_proxy></Test_proxy>
</div>
</template>

<script>
import Test_proxy from './views/Test/test_proxy.vue';

export default {
    name: "App",
    components: { Test_proxy }
}
</script>

<style>

</style>
