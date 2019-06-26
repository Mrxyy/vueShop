<template>
	 <mt-swipe :auto="1000" :speed="1000" @change="handleChange">
	    <mt-swipe-item v-for="value in banner" :key="value.id">
			<img :src="value.url" alt="" width="100%" height="100%">
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	export default {
		 methods:{
		    handleChange(index){
		       // Toast(index.toString())
		     }
		},
		props:['banner']
	}
</script>

<style>
</style>
