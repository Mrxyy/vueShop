import VueRouter from 'vue-router'
import home from './components/home.vue'
import contcat from './components/contcat.vue'
import search from './components/search.vue'
import shopcar from './components/shopcar.vue'
import newsList from './components/public/newsList.vue'
import sunmany from './components/public/sunmany.vue'
import putrue from  './components/public/putrue.vue'
import summaryP from  './components/public/summaryP.vue'
import shopping from  './components/public/shopping.vue'
import summaryS from  './components/public/summaryS.vue'
import tuwen from  './components/public/tuwen.vue'
import sc from  './components/public/shoppingCom.vue'
const router = new VueRouter({
  routes:[
    {
      path:"/",
      redirect:'/search'
    },
    {
      path:"/home",
      component: home
    },
    {
      path:"/contcat",
      component: contcat
    },
    {
      path:"/shopcar",
      component: shopcar
    },
    {
      path:"/search",
      component: search
    },
		{
			path:"/newsList",
			component:newsList
		},
		{
			path:'/sunmany/:params',
			component:sunmany
		},
		{
			path:'/putrue',
			component:putrue
		},
		{
			path:'/summaryP/:params',
			component:summaryP
		},
		{
			path:'/shopping',
			component:shopping,
		},
		{
			path:'/summaryS',
			component:summaryS,
      name:"summaryS"
		},
		{	
			path:'/tuwen',
			component:tuwen,
		},
		{	
			path:'/sc',
			component:sc,
		}
  ]
})
console.log(router)
export default router