<template>
	<div>
    <!-- <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>-->
	<mt-cell
  v-for="(v,i) in list" :key="v.id"
  :title="v.title"
  :to="'/sunmany'+'/'+v.id"
  is-link
  :label="v.body"
  >
  <!-- <nobr slot="title">{{v.title}}</nobr> -->
   <img :src="putrue[i]?putrue[i].thumbnailUrl:false" slot="icon" width="30px" height="30px" alt="">
</mt-cell>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				putrue:[],
			}
		},
		created() {
			this.$http.get('http://jsonplaceholder.typicode.com/posts')
				.then((data)=>{
					console.log(data.body)
					this.list = data.body
				})
		    this.$http.get('http://jsonplaceholder.typicode.com/photos')
				.then(
				   (data)=>{
					   console.log(data.body)
					   this.putrue = data.body
				   }
				)
		}
	}
</script>

<style>
	body{
	padding-bottom: 55px;
	}
	.mint-cell-text{
		white-space: nowrap;
		overflow: hidden;
		width: 60%;
		display: inline-block;
		margin-left: 0.3125rem;
		text-overflow: ellipsis;
	}
</style>
