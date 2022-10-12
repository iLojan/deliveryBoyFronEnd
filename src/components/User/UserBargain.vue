<template >
    <div>
        <Bargain @deleteBargain="deleteBargain" :bargain="bargain"/>
    </div>
</template>
<script>
import Bargain from "../common/Bargain.vue";
import axios from "axios";
export default {
    components:{Bargain},
    data() {
        return {
            bargain:""
        }
    },
    methods: {
       deleteBargain(event){
         let commonPath = process.env.VUE_APP_SERVER
         let path = "/api/v1/delete/"+event;
          axios.delete(commonPath+path,{ withCredentials: true })
          .then(res=>{
            this.getBargainByUserId()
            console.log(res);
          })
      },
          getBargainByUserId(){

            let commonPath = process.env.VUE_APP_SERVER
            let newBargain,userId = localStorage.getItem("id");;
      let path = "/api/v1/bargainByUserId/"+userId;    
      axios.get(commonPath+path,{ withCredentials: true })
    .then(res=>{
      newBargain = this.filtertems(res.data)
      this.bargain = this.sortedItems(newBargain);
      console.log("this.bargain",this.bargain,"===",newBargain);
    })
    },
      filtertems(data) {
      console.log("data", data);
      const searchObject = data.filter((bargain) => bargain.status === "Open");
      return searchObject;
    },
     sortedItems: function(items) {
    return items.sort((a, b) => new Date(b.id)-new Date(a.id))
  },
    },
    mounted() {
        this.getBargainByUserId()
    },
}
</script>
<style >
    
</style>