<template>
	<div>
		<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a  class="item"   v-for="v in type"   @click="load(v.id)"  :class="['mui-control-item',v.id == -1?'mui-active':'']">
					{{v.title}}
				</a>
			</div>
		</div>
	    <ul>
			<router-link v-for="item in tu" :to="'/summaryP/'+Math.abs(item.id)" tag='li'>
				<img v-lazy="item.url">
				<div class="inner">
					<h4>{{item.title}}</h4>
					<p>{{item.thumbnailUrl}}</p>
				</div>
			 </router-link>
		</ul>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.js'
	export default {
		data(){
			return {
				type:[],
				tu:[]
			}
		},
		methods:{
			load(id){
				this.$http.get('http://jsonplaceholder.typicode.com/photos?albumId='+Math.abs(id))
					.then(
						(res)=>{
							this.tu = res.body
							console.log(this.tu)
						}
					)
			}
		},
		mounted() {
		mui('.mui-scroll-wrapper').scroll({
					deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
				});
		},
		created() {
			this.$http.get('http://jsonplaceholder.typicode.com/albums')
				.then(
					(res)=>{
						this.type = res.body
						this.type.unshift({
							id:'-1',
							title:'全部'
						})
						console.log(this.type[0])
					}
				)
// 				this.$http.get('https://api.apiopen.top/musicRankingsDetails?type=1')
// 					.then(
// 						(res)=>{
// 							console.log(res.body,55555)
// 						}
// 					)
			this.load(-1)
		}
	}
</script>

<style scoped="scoped">
	*{
		touch-action: pan-y;
	}
	ul{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
		background: #CCCCCC;
		text-align: center;
		margin: 5px;
		position: relative;
		}
    img{
		width: 100%;
		vertical-align: middle;
		box-shadow: 0px 0px 3px 1px #567568;
	}
	img[lazy='loading'] {
		  width: 100%;
		  height: 300px;
		  margin: auto;
		}
	.inner{
		width: 100%;
		text-align: left;
		position: absolute;
		bottom: 0;
		background: rgba(0,25,0,.2);
	}
	.inner>h4{
		color: white;
	}
	.inner>p{
		text-indent: 20px;
	}
	.item{
		background: orangered;
		padding: 0;
		margin: 0 20px;
		border-radius: 10px;
		border: none !important;
	}
	.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
		background: #C0C0C0;
	}
</style>
