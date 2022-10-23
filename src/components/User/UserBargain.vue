<template >
    <div>
        <Bargain @deleteBargain="deleteBargain" :bargain="bargain"/>
    </div>
      <div class="" v-if="showAlert">
      <AlertPopup @hidenPopup="hidenAlertPopup" alertMgs="Delete success" alertTitle="success" />
    </div>
</template>
<script>
import Bargain from "../common/Bargain.vue";
import axios from "axios";
import AlertPopup from "../common/AlertPopup.vue";
export default {
    components:{Bargain,AlertPopup},
    data() {
        return {
            bargain:"",
            showAlert:false
        }
    },
    methods: {
      hidenAlertPopup(event){
      this.showAlert = event;
      this.$router.push("/user/my-in-progress")
      },
       deleteBargain(event){
         let commonPath = process.env.VUE_APP_SERVER
         let path = "/api/v1/delete/"+event;
          axios.delete(commonPath+path,{ withCredentials: true })
          .then(res=>{
            this.getBargainByUserId()
            this.showAlert = true;
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
      //console.log("this.bargain",this.bargain,"===",newBargain);
    })
    },
      filtertems(data) {
     // console.log("data", data);
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