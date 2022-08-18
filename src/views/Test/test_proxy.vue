<template>
  <div class="proxy">
    <h1>proxy</h1>
    <div class="input">
      <div class="tanchu">{{ data.msg }}</div>
      <input type="text" name="" id="" v-model="data.msg" />
    </div>

    <h3>名字:{{ data.name }}</h3>
    <h3>年龄:{{ data.age }}</h3>
    <h3>爱好:{{ data.hobby }}</h3>
    <h3>baby:{{ data.baby }}</h3>
    <button @click="changeInfo">更改个人信息</button>
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "TestProxy",
  setup() {
    let data = reactive({
      flag: true,
      msg: "",
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

    // let msg = "";

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
<style scoped>
.proxy{
  background-color: pink;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 16px;
}
.input {
  position: relative;
}
.tanchu {
  min-width: 100px;
  position: absolute;
  background-color: pink;
  top: -55px;
  font-size: 36px;
  border-radius: 5px;
  opacity: 0.8;
}
.tanchu::after {
  content: "";
  border-top: 5px solid pink;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  top: 100%;
  left: 50px;
}
</style>
