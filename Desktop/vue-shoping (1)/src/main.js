//入口文件
import Vue from "Vue"
//引入mint框架
import Mint from 'mint-ui'
//引入路由
import VueRouter from 'vue-router'
// https://www.cnblogs.com/goloving/p/8665421.html
import res from 'vue-resource' 
import VuePreview from 'vue-preview'
// 安装
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(res)
Vue.use(VuePreview) 
import app from './App.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
import comment from './components/public/comment.vue'
import swiper from './components/public/swiper.vue'
import Vuex from 'Vuex'
Vue.component('com',comment)
Vue.component('ban',swiper)
Vue.use(Vuex)
//模板执行编译永远在js文件后面
// Vue.http.options.emulateJSON = true;
// var storage= JSON.parse(localStorage.getItem('sell'))||[]
// localStorage.setItem("sell",JSON.stringify([])
var store = new Vuex.Store({
	 state:{
		 sell:JSON.parse(localStorage.getItem('sell'))||[]
	 },
	 mutations:{
		 add: function (state,item) {
			var vc =	state.sell.some((v,i)=>{
				   if(v.title == item.title)
					 {
						 v.count+= item.count
						 return true
					 }
			 })
			 if(!vc){
				 state.sell.push(item)
			 }
			 localStorage.setItem("sell",JSON.stringify(state.sell))
			 console.log(state.sell.count)
		 },
		 chan:(state,i)=>{
			state.sell[i].status = !state.sell[i].status
			console.log(state.sell[i].status)
			localStorage.setItem("sell",JSON.stringify(state.sell))
		 },
		 rem(state,i){
			state.sell.splice(i,1)
			localStorage.setItem("sell",JSON.stringify(state.sell))
		 },
		 numChange(state,con){
			 var a = con.i
			//  console.log(con)
			state.sell[a].count += (con.nums-0)
			localStorage.setItem("sell",JSON.stringify(state.sell))
		 }
	 },
	 getters:{
		 sel:function(state){
			 var arr = []
			 state.sell.forEach(
				function(v,i){
					// console.log(v.status)
					arr.push(v.status)
				}
				)
				console.log(arr)
				return arr
		 },
		 count:(state)=>{
			 var a = 0 
       state.sell.forEach(
				 function(v,i){
					 a += v.count
					// console.log(v.status)
				 }
			 )
			 return a
		 },
		 com:(state)=>{
			 // 总价
			 var a = 0
			 //件数
			 var b = 0
			 var c = {}
			state.sell.forEach(
					function(v,i){
						if(v.status){
									a += (v.curent-0)
									b += (v.count-0)
						}
					}
				)
			c.a = a
			c.b = b
			return c	
		 }
	 }
})
new Vue({
    el:'#app',
    router,
		render:c=>c(app),
		store,
	created() {
		// 路由的api 用发
		// console.log(router.push('/home1'))
		// router.push({path:'/home1'})
		// 使用path 会忽略params
		// router.push({name:'summaryS',params:{id:1},query:{p:1}})
		// router.push({name:'summaryS',query:{p:1}})
	}
})