<template>
 <div>
   <div>{{detail.title}}</div>
   <div>{{detail.date}}</div>
   <div v-html="detail.content"></div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      detail:""
     }
   },
   components: {

   },
   created(e){
     console.log(e);

     this.axios.get("/blog/98").then(res=>{
       console.log(res);

       this.detail = res.data.data
     })
   }
 }
</script>

<style>


</style>
