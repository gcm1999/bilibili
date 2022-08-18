<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Test_proxy></Test_proxy>
    <Test_setup @hello="hello"></Test_setup>
    <Test_computed></Test_computed>
    <Test_watch></Test_watch>
    <Test_toRef></Test_toRef>
  </div>
</template>

<script>
import Test_proxy from "./views/Test/test_proxy.vue";
import Test_setup from "@/views/Test/test_setup";
import Test_computed from "./views/Test/test_computed.vue";
import Test_watch from "./views/Test/test_watch.vue";
import Test_toRef from "./views/Test/test_toRef.vue";

export default {
  name: "App",
  components: { Test_proxy, Test_setup, Test_computed, Test_watch, Test_toRef },
  setup(props) {
    function hello(msg) {
      alert(msg);
    }

    return { hello };
  },
};
</script>

<style>
body {
  background-color: #ccc;
}
</style>
