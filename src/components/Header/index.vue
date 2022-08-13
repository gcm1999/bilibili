<template>
  <div class="header" :class="{ bigImg: show }" @click.self="bigImg">
    <h1>Header</h1>
    <div class="nav">
      <div class="nav_left fl">
        <ul class="iconfont">
          <li class="icon-bilibili1">首页</li>
          <li>番剧</li>
          <li>直播</li>
          <li>游戏中心</li>
          <li>会员购</li>
          <li>漫画</li>
          <li>赛事</li>
          <li>嘉年华</li>
          <li class="icon-xiazai">下载客户端</li>
        </ul>
      </div>

      

      <div class="nav_right fr">
        <ul class="iconfont">
          <li>
            <div>&#xe65d;</div>
            大会员
          </li>
          <li>
            <div>&#xe630;</div>
            消息
          </li>
          <li>
            <div>&#xeca7;</div>
            动态
          </li>
          <li>
            <div>&#xeca7;</div>
            收藏
          </li>
          <li>
            <div>&#xe608;</div>
            历史
          </li>
          <li>
            <div>&#xe6bc;</div>
            创作中心
          </li>
          <li>投稿</li>
        </ul>
      </div>


      <div class="nav_search">
        <input type="text">
      </div>
    </div>

    <div></div>
    <div></div>
    <div></div>
    <div></div>
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
.fl {
  float: left;
}
.fr {
  float: right;
}
.header {
  max-width: 1920px;
  height: 180px;
  background: url(../../assets/header.png) 0 -36px no-repeat;
  /* cursor: pointer; */
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
  transition-timing-function: ease-out;
}
.bigImg {
  height: 360px;
  background: url(../../assets/header.png) no-repeat;
}
.header .nav_left > ul {
  text-align: center;
  display: flex;
  color: white;
  font-size: 14px;
}
.header .nav_left > ul li {
  margin: 8px;
}
.header .nav_right > ul {
  text-align: center;
  display: flex;
  color: white;
  font-size: 14px;
}
.header .nav_right > ul li {
  margin: 0 8px;
}

.nav_search{
  margin:0 auto;
}
</style>
