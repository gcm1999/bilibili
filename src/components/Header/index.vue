<template>
  <div class="header" :class="{ bigImg: data.show }" @click.self="bigImg">
    <h1>Header</h1>
    <div class="nav" v-show="!data.show">
      <div class="nav-left">
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

      <div class="nav-search">
        <div class="search" ref="search">
          <input
            class="search-input"
            type="text"
            placeholder="郭晨明成为世界首富"
            ref="searchInput"
          />
          <img class="search-img" src="./images/sousuo.png" alt="" />
          <div class="search-history" ref="searchHistory" v-show="historyShow">
            <div class="history-header">
              <span>搜索历史</span>
              <span>清空</span>
            </div>
            <ul>
              <li>js实现背景音乐</li>
              <li>前端大牛郭晨明</li>
              <li>虚拟dom</li>
              <li>defineproporty</li>
              <li>vuex getter</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>

      <div class="nav-right">
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
    </div>

    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "Header",
  setup() {
    let data = reactive({
      show: false,
      historyShow: false,
    });

    function bigImg() {
      data.show = !data.show;
    }

    return {
      data,
      bigImg,
    };
  },
  mounted() {
    console.log(this.$refs);
    // let {"search","searchInput","searchHistory"} = this.$refs
    let search = this.$refs.search;
    let searchHistory = this.$refs.searchHistory;
    let searchInput = this.$refs.searchInput;
    console.log(searchInput);
    searchInput.addEventListener("focus", () => {
      // data.historyShow = true;
      searchHistory.style.display = "block";
      search.style.borderRadius = "5px 5px 0 0";
    });
    searchInput.addEventListener("blur", () => {
      searchHistory.style.display = "none";
      search.style.borderRadius = "5px";
    });
  },
  // data() {
  //   return {
  //     show: false,
  //   };
  // },
  // methods: {
  //   bigImg() {
  //     this.show = !this.show;
  //   },
  // },
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
  min-width: 1440px;
  height: 180px;
  margin: 0 auto;
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
.header .nav {
  display: flex;
}
.header .nav-left > ul {
  text-align: center;
  display: flex;
  color: white;
  font-size: 14px;
}
.header .nav-left > ul li {
  cursor: pointer;
  /* background-color: skyblue; */
  height: 36px;
  line-height: 36px;
  margin: 8px;
}
.header .nav-left > ul li:hover {
  animation: navmove 0.3s infinite;
  animation-iteration-count: 1;
  /* animation: 
        name 
        duration 
        timing-function 
        delay 
        iteration-count     循环次数
        direction 
        fill-mode; */
}
@keyframes navmove {
  0% {
    line-height: 36px;
  }
  25% {
    line-height: 24px;
  }
  50% {
    line-height: 14px;
  }
  75% {
    line-height: 24px;
  }
  100% {
    line-height: 36px;
  }
}
.header .nav-right > ul {
  text-align: center;
  display: flex;
  color: white;
  font-size: 14px;
}
.header .nav-right > ul li {
  cursor: pointer;
  margin: 0 8px;
  /* background-color: skyblue; */
}

.nav-search {
  /* margin: auto; */
  flex-grow: 1;
  display: flex;
  line-height: 50px;
}

.nav-search .search {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 500px;
  height: 40px;
  background-color: rgb(238, 240, 240);
  border-radius: 8px;
}
.nav-search .search-history {
  position: absolute;
  background-color: white;
  width: 100%;
  min-height: 300px;
  top: 100%;
}
.history-header {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 0 12px;
}
.history-header span:nth-of-type(1) {
  color: #ccc;
}
.history-header span:nth-of-type(2) {
  color: rgb(30, 128, 255);
}
.search-history ul li {
  font-size: 14px;
  padding: 0 10px;
}
.search-history ul li:hover {
  background-color: rgb(239, 242, 245);
}
.nav-search .search:hover,
.nav-search .search:focus {
  background-color: white;
}

.nav-search input {
  border: 5px solid rgb(238, 240, 240);
  border-radius: 5px;
  margin: 0 10px;
  width: 410px;
  height: 20px;
  font-size: 14px;
  flex-grow: 1;
  /* border: 0; */
  background-color: rgb(238, 240, 240);
  /* background-color: rgb(226,223,226); */
  outline: none;
}
.nav-search .search-img {
  margin: 0 10px;
  width: 18px;
  height: 18px;
}

.nav-search input:focus {
  background-color: rgb(219, 219, 223);
  border: 5px solid rgb(219, 219, 223);
}
</style>
