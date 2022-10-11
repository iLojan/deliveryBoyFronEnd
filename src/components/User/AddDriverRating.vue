<template>
    <div>
        <div class="flex flex-col my-4">
            <div class="flex flex-col">
                <label class="text-primary-font mb-2 text-left">Select Rating</label>
                <select class="rounded-xl border w-56 px-4 py-3" v-model="ratingValue">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>
            </div>
            <div class=" mt-3">

                <button class="p-3 w-full rounded-xl bg-primary-color text-white font-medium" @click="saveRating()">Save</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props:['driverId'],
    data() {
        return {
            driver:{
                id:"",
                driverRatings
            },
            ratingValue:1,
              rating:0,
            total:0,
            ratingCal:0,
        }
    },
    mounted() {
        this.getDriverById()
    //    this.getRating(); 
    },
    methods: {
         getDriverById() {
      let commonPath = process.env.VUE_APP_SERVER
      let path = "/api/auth/getUserById/"+this.driverId;
    axios.get(commonPath+path,{ withCredentials: true })
    .then(res=>{
        this.driver = res.data;
      });
    },
        saveRating(){
            let rating ={
                   rating:this.ratingValue,
                   comments:"tresttxvjk"
                    }
                    this.driver.driverRatings.push({
                   "rating":this.ratingValue,
                   "comments":"tresttxvjk"
                    })
                    console.log("driverId",this.driver.driverRatings);
              let commonPath = process.env.VUE_APP_SERVER
                const path = "/api/auth/putUser/";
                let driver = {user:this.driver}
                axios.post(commonPath+path,driver,{ withCredentials: true })
                .then(res => {
                    if(res.data){
                        this.$emit("closePopup",false)
                    }
                })
        },
         
    },
}
</script>
<style lang="">
    
</style>