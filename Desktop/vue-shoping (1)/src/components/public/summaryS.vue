<template>
  <div>
    <div class="mui-card-content-inner">
      <img :src="info.pic_premium" alt width="100%">
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <span class="justify">市场价: ￥{{info.hot}}</span>
            <span class="justify">
              销售价:
              <strong>￥{{info.file_duration}}</strong>
            </span>
          </p>购买数量:
					<!-- 应为mui的js是按照自定义上的属性设置的max值，异步过后并没有更新 可以手动更新 -->
          <div class="mui-numbox" data-numbox-min="1">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" @change="c($event)" v-model="count">
            <button class="mui-btn mui-btn-numbox-plus"  type="button">+</button>
            <transition @before-enter="bef" @enter="animation" @after-enter="s" name="an"> 
              <div class="dot" v-show="falg"></div>
            </transition>
          </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click.prevent="change">加入购物车</mt-button>
          </p>
        </div>
        <div class="mui-card">
          <div class="mui-card-header">
            <h4>商品参数</h4>
          </div>
          <div class="mui-card-content">
            <p>商品货号：{{info.song_id}}</p>
            <p>库存情况：{{info.artist_id}}</p>
            <p>上架时间：{{info.publishtime}}</p>
          </div>
           <div class="mui-card-footer">
            <mt-button size="large" plain type="primary" @click="tuwen('/tuwen')">图文介绍</mt-button>
            <mt-button size="large" plain type="danger" @click="tuwen('/sc')">商品评论</mt-button>
           </div>
        </div>
      </div>
    </div>
    <!-- <h1>123</h1> -->
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  data() {
    return {
      info: {},
      count: 1,
      falg: false
    };
  },
  methods: {
    c(e){
      this.count = e.target.value - 0
      // console.log(this.count,e.target)
    },
    change(){
      this.falg = !this.falg
       var sp = {
         title:this.info.title,
         pic:this.info.pic_small,
         count: this.count,
         curent:this.info.file_duration,
         status:true,
         id:this.info.song_id
       }
        this.$store.commit('add',sp)
        // console.log(this.$store.state.sell[0].count,this.$store.getters.count)
    },
    tuwen(path){
      this.$router.push(
        {
        path:path,
        query: this.$route.query
        }
      )
    },
    bef(el){
      el.style.right = "50%"
      el.style.top = "0"
      el.style.zIndex='9999'
    },
    animation(el,done){
      el.offsetWidth
      var a = document.getElementsByClassName('mint-badge')[0].getBoundingClientRect()
      var a1 = document.getElementsByClassName('mui-numbox')[0].getBoundingClientRect()
      console.log(a.y,a1.y,a1.top)
      el.style.transition = "all 0.8s"
      el.style.right = (a1.left-a.left+a1.width)+"px"
      el.style.top = (a.top-a1.top+15)+"px"
      done()
    },
    s(el){
      this.falg = !this.falg
    },
    send() {
      console.log(this.$route.query);
      this.$http
        .get(
          "https://api.apiopen.top/musicRankingsDetails?type=" +
            this.$route.query.type
        )
        .then(res => {
          // rank 是从1起
          this.info = res.body.result[this.$route.query.rank - 1];
          mui(".mui-numbox").numbox().setOption('max',this.info.artist_id)
          // console.log(res.body.result[this.$route.query.rank - 1]);
        });
    }
  },
  created() {
    this.send();
  },
  mounted() {
    // 只有网站的刷新时才会属性,路由级别的不会重置页面(new url == old url 也会刷新)
    mui(".mui-numbox").numbox();
  }
};
</script>

<style lang="scss">
.mui-numbox {
  width: 70px;
  padding: 0 20px;
  height: 20px;
}
.dot{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    position: absolute;
    right: 50%;
    transform: translate(50%,0);
    top: 0;
    z-index: 999;
}
.mui-numbox [class*="btn-numbox"],
.mui-numbox [class*="numbox-btn"] {
  width: 20px;
}
p {
  margin: 20px 0;
  button {
    margin-right: 10px;
  }
}
.justify {
  display: inline-block;
  padding-right: 20px;
  strong {
    color: red;
  }
}
// .an-enter-to{
//   right: 114%;
// }
.mui-card-footer{
  flex-direction: column;
  *{
    margin: 10px 0;
  }
}
.mui-numbox{
  overflow: initial;
}
.mui-numbox .mui-input-numbox, .mui-numbox .mui-numbox-input{
  vertical-align: top;
}
</style>
