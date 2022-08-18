<template>
  <div class="computed">
    <h1>computed</h1>

    <h3>名字:{{ data.name }}</h3>
    <h3>年龄:{{ data.age }}</h3>
    <input type="text" v-model="info" />
  </div>
</template>
<script>
import { reactive, computed } from "vue";

export default {
  name: "TestComputed",
  setup(props, content) {
    let data = reactive({
      name: "gcm",
      age: 22,
    });

    // let info = computed(() => {
    //   return data.name + "-" + data.age;
    // });
    let info = computed({
      get() {
        return data.name + "-" + data.age;
      },
      set(value) {
        const infoArr = value.split("-");
        data.name = infoArr[0];
        data.age = infoArr[1];
      },
    });

    return { data, info };
  },
};
</script>
<style scoped>
.computed {
  background-color: pink;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 16px;
}
</style>
