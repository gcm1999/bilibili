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
}
.bigImg {
  height: 360px;
  background: url(../../assets/header.png) no-repeat;
}
</style>
