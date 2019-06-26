<template>
  <div>
    <com :ids = ids></com>
  </div>
</template>

<script>
export default {
   data(){
     return {
       ids: 0
     }
   },
   created(){
     this.ids = this.$route.query.rank
   }
}
</script>

<style>
  
</style>
