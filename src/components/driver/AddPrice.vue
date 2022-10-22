<template >
  <div>
    <div class="">
        
          <div class="flex justify-between items-center mb-3">
            <h2 class="font-semibold text-primary-font text-h2-font">Order Details {{selectedOrder.status}}</h2>
        </div>
        <!-- {{driver.driverPrices}} -->
        <div class="grid grid-cols-12 gap-4">
          <div class="mt-2 col-span-6 ">
            <label class="block text-secondary-font font-medium capitalize">From Location</label>
            <label class="text-primary-font font-medium mt-2">{{selectedOrder.fromLocation}}</label>
          </div>
           <div class="mt-2 col-span-6">
            <label class="block text-secondary-font font-medium capitalize">To Location</label>
            <label class="text-primary-font font-medium mt-2">{{selectedOrder.toLocation}}</label>
          </div>
<div class="mt-2 col-span-3">
            <label class="block text-secondary-font font-medium capitalize">Material</label>
            <label class="text-primary-font font-medium mt-2">{{selectedOrder.material}}</label>
          </div>
           <div class="mt-2 col-span-3">
            <label class="block text-secondary-font font-medium capitalize">Distance</label>
            <label class="text-primary-font font-medium mt-2">{{selectedOrder.distance}}km</label>
          </div>
           <div class="mt-2 col-span-3">
            <label class="block text-secondary-font font-medium capitalize">Duration</label>
            <label class="text-primary-font font-medium mt-2">{{selectedOrder.duration}}</label>
          </div>
          
            <div class="mt-2 col-span-3">
            <label class="block text-secondary-font font-medium capitalize">Weight</label>
            <label class="text-primary-font font-medium mt-2">{{selectedOrder.weight}}</label>
          </div>
            <div class="mt-2 col-span-12">
            <label class="block text-secondary-font font-medium capitalize">Standard Price</label>
            <label class="text-primary-font font-medium mt-2">LKR. {{selectedOrder.standardPrice}} </label>
          </div>
        </div>

        <!-- User Details -->
        <div class="mt-3">
           <h3 class="font-semibold text-primary-font text-h3-font">User Details</h3>
              <div class="grid grid-cols-12 gap-4">
          <div class="mt-2 col-span-6 ">
            <label class="block text-secondary-font font-medium capitalize">User Name</label>
            <label class="text-primary-font font-medium mt-2">{{user.fistName}} {{user.lastName}}</label>
          </div>
           <div class="mt-2 col-span-6">
            <label class="block text-secondary-font font-medium capitalize">User Phone Number</label>
            <label class="text-primary-font font-medium mt-2">{{user.phoneNumber}}</label>
          </div>
        </div>
        </div>
      
        <!-- set price -->
        <div class="mt-5" >
            <div class="grid grid-cols-12 gap-2 mb-2 content-end px-3 py-4 bg-gray-50 rounded-lg"  :key="index">
              <div class="col-span-12">
                <h2 class="font-bold mb-3">Bargain Requesting Price</h2>
              </div>
                <div class="col-span-4">
                    <div class="">
                    <label class="block text-secondary-font font-medium capitalize mb-2">Price</label>
                    <input v-model="driverPrices.price" type="text" placeholder="price" class="w-full border  rounded  text-p1-font text-primary-font  focus:ring-0 pl-2  border-gray-300 py-2  "  />
                    
                    </div>
                </div>
             
                <div class="col-span-4">
                    <div class="">
                    <label class="block text-secondary-font font-medium capitalize mb-2">hour</label>
                    <input v-model="driverPrices.hour" type="text" placeholder="hour" class="w-full border  rounded  text-p1-font text-primary-font  focus:ring-0 pl-2  border-gray-300 py-2 " />
                  
                    </div>
                </div>
                  <div class="col-span-4 flex justify-end items-end ">
                    <label></label>
            <button 
            :disabled="driverPrices.price <= 0 && driverPrices.hour <= 0" 
            :class="driverPrices.price <= 0 || driverPrices.hour <= 0?'cursor-not-allowed opacity-25':''"  class="bg-primary-color py-2.5 px-4 text-white rounded-lg w-full" 
            data-bs-dismiss="modal"
             @click="update()">Set Price</button>
        </div>
            </div>
        </div>     
  </div>
    <div class="" v-if="showAlert">
      <AlertPopup @hidenPopup="hidenPopup" alertMgs="Request Successfully Sent" alertTitle="Bargaining Request - Driver" />
    </div>
  </div>
</template>
<script>
import AlertPopup from "../common/AlertPopup.vue";
import axios from "axios";
export default {
  props:['selectedOrder','user'],
  components:{AlertPopup},
  data() {
    return {
      driver: {  },
      showAlert:false,
      bargain:{
       userId:0,
       driverId:0,
       orderId:0,
       price:0,
       hour:0,
       type:"Request",
       status:"Open"
      },
       driverPrices:{
          price:0,
          hour:0,
          orderId:0
      },
      status:{
        id:this.selectedOrder.id,
        status: this.selectedOrder.status
      },
      showPriceError:false,
      showHourError:false
    };
  },
  methods: {
    hidenPopup(event){
      this.showAlert = event;
      this.$router.push({name:'driverBargain'})
    },
    // getUserById() {
    //   let commonPath = process.env.VUE_APP_SERVER;
    //   let path = "/api/auth/getUserById/" + this.selectedOrder.userId;
    //   axios.get(commonPath + path, { withCredentials: true }).then((res) => {
    //     this.user = res.data;
    //   });
    // },
    addPrice(){
      let priceObj =   {"price": "", "OrderId": "", "hour": "" }
      this.driver.driverPrices.push(priceObj)
    },
    getOrderByEmail() {
      let userId = localStorage.getItem("id");
     let commonPath = process.env.VUE_APP_SERVER
    // console.log("commonPath",commonPath);
      let path = commonPath+"/api/auth/getUser/" + userId;
      axios.get(path, { withCredentials: true }).then((res) => {
        this.driver = res.data;
        this.updateUser()
     //   console.log(res);
      });
    },
    updateUser(){
  let commonPath = process.env.VUE_APP_SERVER
  this.driver.driverPrices= {"price": 0, "OrderId": 0, "hour": "0" }
  console.log("this.driver",this.driver);
       let path = "/api/auth/putUser";
       let driver = {user:this.driver}
      axios.post(commonPath+path,driver, { withCredentials: true }).then((res) => {
          //  console.log(res);
      });
    },
    updateStatus(){
      this.status.id = this.selectedOrder.id
  let commonPath = process.env.VUE_APP_SERVER
  this.driver.driverPrices= {"price": 0, "OrderId": 0, "hour": "0" }
  //console.log("this.driver",this.driver);
       let path = "/api/v1/updateStatus";
      axios.post(commonPath+path,this.status, { withCredentials: true }).then((res) => {
           // console.log("updateStatus",res);
      });
    },
    update(){
      console.log("this.selectedOrder",this.selectedOrder);
      let myId = localStorage.getItem("id");
    this.driverPrices.orderId  = this.selectedOrder.id;
      this.bargain.orderId = this.selectedOrder.id;
      this.bargain.price = this.driverPrices.price;
      this.bargain.hour = this.driverPrices.hour;
      this.bargain.userId = this.selectedOrder.userId;
      this.bargain.driverId = myId;
 console.log("this.bargain",this.bargain);
      if(this.driverPrices.price <= 0){
        this.showPriceError = true
      }
      else if(this.driverPrices.hour <= 0){
        this.showHourError = true
      }
      else{
         let commonPath = process.env.VUE_APP_SERVER
       let path = "/api/v1/addBargain";
      axios.post(commonPath+path,this.bargain, { withCredentials: true }).then((res) => {
            console.log(res);
            this.showAlert = true
      });
      }
      
    }
  },
  mounted() {   
    console.log("this.bargain",this.bargain); 
    this.bargain.userId = this.selectedOrder?.userId;
    // this.getUserById();
    this.getOrderByEmail();
    
  },
};
</script>
<style lang="">
</style>