<template>
	<div>
			<h3><pre>{{v.title}}</pre></h3>
			 <article>{{v.body}}</article>
			 <com :ids=ids></com>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				v:'',
				ids:''
			}
		},
		created(){
			// console.log(this.$route)
			this.ids = this.$route.params.params
			console.log(this.ids)
			this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.$route.params.params)
				.then((data)=>{
					this.v = data.body
				})
				}
	}
</script>

<style scss scoped>
	h3{
		color: green;
	}
</style>
