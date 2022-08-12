<template>
  <div class="header" :class="{ bigImg: show }" @click.self="bigImg">
    <h1>Header</h1>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    bigImg() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
.header {
  height: 180px;
  background: url(../../assets/header.png) 0 -36px no-repeat;
  /* 过渡时间 */
  transition-duration: 1s;
  /* 过渡属性 */
  transition-property: all;
  /* 过渡延迟 */
  transition-delay: 0.2s;

  /* 过渡函数 
                ease/ease-in-out        慢>快>慢
                linear      匀速
                ease-in     慢>快
                ease-out    快>慢
                step-start  直接变化
                step-end    不变化过渡时间结束后直接变化
            */
  transition-timing-function: linear;
}
.bigImg {
  height: 360px;
  background: url(../../assets/header.png) no-repeat;
}
</style>
