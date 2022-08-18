<template>
  <div class="watch">
    <h1>watch</h1>

    <h3>名字:{{ data.name }}</h3>
    <h3>年龄:{{ age }}</h3>
    <button @click="age++">年龄++</button>
    <button @click="data.name += '~'">名字~</button>
  </div>
</template>
<script>
import { ref, reactive, watch, watchEffect } from "vue";

export default {
  name: "TestWatch",
  setup(props, content) {
    let age = ref(22);
    let data = reactive({
      name: "gcm",
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // watch(data, (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // });
    // watch(age, (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // });

    watchEffect(() => {
      const num = age.value;
      const obj = data.name;
      console.log("watchEffect");
    });

    return { data, age };
  },
};
</script>
<style scoped>
.watch {
  background-color: pink;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 16px;
}
</style>
