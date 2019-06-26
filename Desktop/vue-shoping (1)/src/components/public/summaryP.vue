<template>
	<div>
		<h3>
			我所在{{val.albumId}}相册
		</h3>
		 <vue-preview :slides="slide1" @click.native="handleClose"></vue-preview>
		<div>
			{{val.title}}
		</div>
		<com :ids="ids"></com>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				val:'',
				ids:'',
				slide1:[]
			}
		},
		methods:{
			handleClose () {
				// this.$router.push('/home')
				// console.log(100);
			  }
		},
		created(){
			// console.log(this.$route)
			this.ids = this.$route.params.params
			console.log(this.ids)
			this.$http.get('http://jsonplaceholder.typicode.com/photos/'+this.$route.params.params)
				.then((data)=>{
					this.val = data.body
					for(var i = 0;i<5;i++ ){
						this.slide1.push({
							 src: data.body.url,
							 msrc: data.body.thumbnailUrl,
							 alt: 'picture1',
							 title: 'Image Caption 1',
							 w: 600,
							 h: 400
						})
					}
					console.log(this.val,111)
				})
				}
	}
</script>

<style>
	figure {
		margin: 5px;
     }
	.my-gallery{
		width: 100%;
		display: flex;
		flex-wrap:wrap;
		justify-content: flex-start;
	}
</style>
