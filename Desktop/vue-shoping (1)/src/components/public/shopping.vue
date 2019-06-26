<template>
		<section class="view">
			<template v-for="box1 in box">
				<div class="box" v-for="v in box1.result" :key='v.title' @click="cli(box1.type,v.rank)">
				<!-- 数组为0 的时候不会编译 -->
				<img :src="v.pic_radio" alt="">
				<h3>{{v.title}}</h3>
				<div class="sell">
					<p>
						<strong>￥{{v.file_duration}}</strong>
						<del>￥{{v.hot}}</del>
						<p class="tex">
							<span>热卖中</span>
							<span>库存{{v.artist_id}}件</span>
						</p>
					</p>
				</div>
			</div>
			</template>
			<mt-button size="normal" v-show="box.length>0" @click.native="more()"  type="primary" plain>
				加载更多
			</mt-button>
		</section>
</template>

<script>
	export default {
		data(){
			return {
				box:[],
				id:0
			}
		},
		methods:{
			more(){
				this.id++
				this.$http.get('https://api.apiopen.top/musicRankingsDetails?type='+this.id)
				.then(
					(res) => {
						console.log(res.body, 55555)
						if(res.body.code==200){
							res.body.type = this.id
							this.box.push(res.body)
						}
						console.log(this.id)
					}
				)
			},
		    cli(type,rank){
				this.$router.push({
					path:'/summaryS',
					query:{type,rank},
				})
			}
		},
		created(){
			this.more()
		}
	}
</script>

<style lang='scss' scoped>
	.view{
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		 .box{
			display: flex;
			flex-direction: column;
		    justify-content:space-between ;
			align-content: space-between;
		 	width: 49%;
			margin: 0.2%;
			border: 1px #C7C7CC solid;
			img{
				margin: 5px;
				box-shadow: 0 0  3px 1px lightpink; 
			}
			 h3{
			   font-size:15px; 	 
			 }
			 strong{
				 color: red;
				 padding: 5px 5px;
			 }
			 .sell{
				 width: 100%;
				 background: #ccc;
				 span,del{
				 				 padding: 5px 5px;
								 font-size: 50%;
				 }
				 .tex{
				 				 /* color: red; */
				 				 text-align: justify;
								 span{
									 &:nth-child(2){
										 display: block;
										 float: right;
									 }
								 }
				 }
			 }
		 }
		 .mint-button{
			 width: 49%;
			 margin-top: 10px;
			 align-self: flex-end;
		 }
	}
</style>
