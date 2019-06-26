<template>
  <div>
    <p v-for="(v,key,i) in info" :key="i">{{key.includes('pic') ? '': key +' : ' + v}}</p>
    <div v-for=" (v,key) in info" :key="key" v-if="key.includes('pic')">
          <p>{{key.includes('pic') ? key+':'+v.slice((v.lastIndexOf(',')+3))+'X'+v.slice((v.lastIndexOf(',')+3)):""}}</p> 
           <img :src="key.includes('pic') ? v : false">
    </div>
  </div>
</template>

<script>
export default {
      data(){
        return {
          info : {}
        }
      },
      created() {
      console.log(this.$route.query,55555);
      this.$http
        .get(
          "https://api.apiopen.top/musicRankingsDetails?type=" +
            this.$route.query.type
        )
        .then(res => {
          // rank 是从1起
          this.info = res.body.result[this.$route.query.rank - 1];
          console.log(res.body.result[this.$route.query.rank - 1]);
        });
      }
}
</script>

<style lang="scss" scoped>
    img{
      max-width: 100%
    }
</style>