<template>
  <div class="toRef">
    <h1>toRef</h1>

    <h3>名字:{{ name }}</h3>
    <h3>年龄:{{ age }}</h3>
    <button @click="age++">年龄++</button>
    <button @click="name += '~'">名字~</button>
  </div>
</template>
<script>
import { toRef, ref, reactive, watch, watchEffect } from "vue";

export default {
  name: "TestToRef",
  setup(props, content) {
    let data = reactive({
      name: "gcm",
      age: 22,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    let name = toRef(data, "name");
    let age = toRef(data, "age");

    return { data, name, age };
  },
};
</script>
<style scoped>
.toRef {
  background-color: pink;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 16px;
}
</style>
