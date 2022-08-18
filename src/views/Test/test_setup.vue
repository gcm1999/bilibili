<template>
  <div class="setup">
    <h1>setup</h1>

    <h3>名字:{{ data.name }}</h3>
    <h3>年龄:{{ data.age }}</h3>
    <button @click="testEmit">测试emits</button>
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "TestSetup",
  emits: ["hello"],
  setup(props, content) {
    let data = reactive({
      name: "gcm",
      age: 22,
    });
  // console.log(props,content);
    function testEmit() {
      content.emit("hello", "hello");
    }

    return { data, testEmit };
  },
};
</script>
<style scoped>
.setup {
  background-color: pink;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 16px;
}
</style>
