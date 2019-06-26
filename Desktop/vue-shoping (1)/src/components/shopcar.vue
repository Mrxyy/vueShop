<template>
   <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(v,i) in $store.state.sell" :key="i">
                        <mt-switch class="mui-media-object mui-pull-left" v-model="val[i]" @change="swi(i)"></mt-switch>
						<img class="mui-media-object mui-pull-left" :src="v.pic">
						<div class="mui-media-body">
                            <h4>
                                {{v.title}}
                            </h4>
							<div class="mui-ellipsis">
                                <strong>￥{{v.curent}}</strong>
                                <div class="mui-numbox" data-numbox-min="1">
                                    <button class="mui-btn mui-btn-numbox-minus" @click="num(i,-1)" type="button">-</button>
                                    <input id="test" class="mui-input-numbox" type="number" v-model="v.count">
                                    <button class="mui-btn mui-btn-numbox-plus" @click="num(i,1)"  type="button">+</button>
                                </div>
                                <a href="javascript:" @click="cli(i)">删除</a>
                            </div>
						</div>
				</li>
			</ul>
            <mt-cell class="mon">
                <div slot="title">
                    <p>总计（不含运费）：</p>
                    <p>已经勾选商品:<strong>{{$store.getters.com.b}}</strong> 件，总价：<strong>￥{{$store.getters.com.a}}</strong></p>
                </div>
                <mt-button type="danger" size="small">去结算</mt-button>
            </mt-cell>
   </div>
</template>
<script>
export default {
    data(){
        return {
            // val:[]
        }
    },
    methods:{
            swi(i){
                //  $store.commit('chan',i)
                console.log(this.$store.commit('chan',i))
                // console.log(this.val)
                // console.log(this.$store.getters.sel,555555555555555555,this.val)
            },
            cli(i){
                this.$store.commit('rem',i)
            },
            num(i,nums){
                var a = {
                    i,
                    nums
                }
                this.$store.commit('numChange',a)
            }
    },
    computed:{
        val(){
            // console.log(this.$store.getters.selected,555555555555555555)
            return this.$store.getters.sel
            }
    }
}
</script>
<style lang="scss" scoped>
 h4{     
          font-size: 13px;
      }
  .mui-ellipsis{
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
          color:blue;
      }
  }
   strong{
          color:red;
      }
  .mui-table-view .mui-media-object{
      line-height: 42px;
      max-width: 64px;
      height: 64px;
  }
  .mon{
      margin: 10px 0;
      padding: 10px;
      p{
          margin: 20px 0;
      }
  }
</style>
