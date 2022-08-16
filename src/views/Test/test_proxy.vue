<template>
  <h1>proxy</h1>
  <h3>名字:{{ data.name }}</h3>
  <h3>年龄:{{ data.age }}</h3>
  <h3>爱好:{{ data.hobby }}</h3>
  <h3>baby:{{ data.baby }}</h3>
  <button @click="changeInfo">更改个人信息</button>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "TestProxy",
  setup() {
    let data = reactive({
      flag: true,
      name: "gcm",
      age: 22,
      hobby: ["抽烟", "喝酒", "烫头"],
      baby: {
        gg: {
          cc: {
            mm: "mm",
          },
        },
        cc: "cc",
        mm: "mm",
      },
    });

    function changeInfo() {
      data.flag
        ? ((data.name = "郭晨明"),
          (data.age = 24),
          (data.baby.gg.cc.mm = "mingming"))
        : ((data.name = "gcm"), (data.age = 22), (data.baby.gg.cc.mm = "mm"));
      data.flag = !data.flag;
    }

    return { data, changeInfo };
  },
};
</script>
<style scoped></style>
