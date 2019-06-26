<template>
	<fieldset class="com">
		<legend>
			发表评论
		</legend>
		<form>
			<mt-field label="评论" placeholder="请输入bb内容(最多30字)" type="textarea" rows="4" maxlength="30" v-model="val"></mt-field>
			<p>
				<mt-button size='large' type="primary"  @click.prevent.stop='edit'>发表评论</mt-button>
			</p>
		</form>
		<ul v-infinite-scroll="loadMore"  infinite-scroll-disabled="loading" :infinite-scroll-distance="1000">
			<li v-for='(v,i) in num' :key='i'>
				<p class="list">
				<span>第{{i+1}}楼</span>
				<span>用户：{{v.name}}</span>
				<span>邮箱：{{v.email}}</span>
				</p>
				<div>
					{{(v.body)}}
				</div>
			</li>
		</ul>
		<mt-spinner v-show="this.num.length<this.list.length" :type="3" color="orange"></mt-spinner>
	</fieldset>
</template>

<script>
 import {Toast} from "mint-ui"
	export default {
		data() {
			return {
				val:'',
				list: [],
				num:[],
				loading:false,
				f:true
			   }
		},
		methods: {
			// 这个其实过多少秒加载
			loadMore() {
				this.loading = true;
				console.log(1)
				// 加载完成后添加完,不会再执行了，如果添加需要手动调用
				setTimeout(() => {
					// console.log(this.num.length,this.list.length)
					if(this.num.length<this.list.length){
						for (let i = 1; i <= 1; i++) {
							this.num.push(this.list[this.num.length]);
						}
						this.loading = false;
						console.log(3)
						if(this.num.length>=this.list.length)
						// 需要将loading 改变且结果要是false 才能继续调用该函数
						this.loading = true;
					}
				}, 1000);
			},
			edit(){
				if(this.val.trim()){
				// 配置
				this.$http.post('https://jsonplaceholder.typicode.com/posts',{name:'xx',email:"123456",body:this.val},{emulateJSON:true})
					.then((res)=>{
						console.log(res.body,this)
						this.list.push(res.body)
						this.val = ''
						Toast("发表成功")
						// 开启重新监听
						this.loadMore()
						this.loading = false
					})
			}
			}
		},
		props: ['ids'],
		created() {
			this.$http.get('http://jsonplaceholder.typicode.com/comments?postId=' + this.ids)
				.then((data) => {
					this.list = data.body
				    this.num = this.list.slice(0,2)
				})
		}
	}
</script>

<style lang="scss" scoped>
	p {
		margin: 10px 0;
	}

	li {
		list-style: none;
	}

	ul {
		padding: 0;
	}

	.list {
		color: #2AC845;
	}

	.list span {
		display: block;

		&:nth-of-type(1) {
			background: #CCCCCC;
		}
	}
</style>
