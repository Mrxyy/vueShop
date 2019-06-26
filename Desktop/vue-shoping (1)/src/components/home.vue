<template>
<div>  
    <ban :banner="banner"></ban>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/newsList">
		                    <span class="mui-icon mui-icon-chat"></span>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/putrue">
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/shopping">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <span class="mui-icon mui-icon-compose"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-videocam"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
	</ul>
</div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
	    return{
		    banner:[]
	    }
    },
    created(){
	    this.$http.get('http://jsonplaceholder.typicode.com/photos?albumId=1')
	     .then(function(data){
		     this.banner = data.body.slice(0,5)
		     console.log(this.banner)
	     })
    }
}
</script>
<style lang="scss" scoped>
  .mint-swipe{
      width:100%;
      height:200px;
      div{
        &:nth-of-type(1){
        background: red;    
        }
        &:nth-of-type(2){
        background: yellow;    
        }
        &:nth-of-type(3){
        background: green;    
        }
      }
  } 
   .mui-grid-view.mui-grid-9 .mui-media {
    width: 33.33%;
}
.mui-icon{
	color: #2AC845;
}
</style>
