  <template>
    <div>
     <mt-header title="Vue 商城" fixed>
       <mt-button icon='back' slot="left" @click.native='go'>返回</mt-button>
       <mt-button icon="more" slot="right"></mt-button>
     </mt-header>
     <mt-tabbar fixed v-model="val">
       <!-- 内部有个a上面有个一个 :class："val==e.id?color:""?" -->
         <mt-tab-item id="首页">
           <span class="mui-icon mui-icon-home" slot="icon"></span>
           <router-link to="/home" tag="div">
           首页
           </router-link>
         </mt-tab-item>
         <mt-tab-item id="会员">
           <span class="mui-icon mui-icon-contact" slot="icon"></span>
           <router-link to="/contcat">
           会员
           </router-link>
         </mt-tab-item>
         <mt-tab-item id="购物车">
           <span slot="icon" class="mui-icon-extra mui-icon-extra-cart"></span>
           <router-link to="/shopcar"  class="car">
           购物车
           <mt-badge type="warning" size="small">{{$store.getters.count}}</mt-badge>
           </router-link>
         </mt-tab-item>
         <mt-tab-item id="搜素" :class="$route.path == '/search'?'is-selected':''">
           <span slot="icon" class="mui-icon mui-icon-search"></span>
           <router-link to="/search" >
           搜素
           </router-link>
         </mt-tab-item>
     </mt-tabbar>
      <!-- <p>当前是：{{val}}</p> -->
      <div style="overflow-x:hidden;">
        <transition>
            <router-view  class="view"></router-view>
        </transition>
      </div>
    </div>
  </template>

  <script>
  export default {
    data:()=>{
      return {
        val: ''
      }
    },
		methods:{
			go(){
				this.$router.back()
			}
		}
  }
  </script>

  <style lang="scss">
    a{
        color:#999;
      }
    .v-enter{
      transform:translateX(100%);
    }
    .v-leave-to{
      transform:translateX(-100%);
    }
    .v-enter-active,
    .v-leave-active{
      transition: all 0.5s ;
      position: absolute;
    }
    .mint-badge.is-warning {
    background-color: red;
    position: absolute;
    top: 0px;
    right: 50%;
    transform: translate(100%,-150%);
    }
    .mint-tabbar.is-fixed{
      width: 100%;
    }
		.mint-spinner-fading-circle {
			margin: auto;
		}
    .car{
      position: relative;
    }
  </style>
  

