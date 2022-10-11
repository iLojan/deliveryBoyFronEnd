<template >
  <div>
    <div class="">
        
          <div class="flex justify-between items-center mb-5">
            <h2 class="font-semibold text-primary-font text-h2-font">Order Details {{selectedOrder.status}}</h2>
        </div>
        <!-- {{driver.driverPrices}} -->
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6 ">
            <label class="block text-secondary-font font-medium capitalize">From Location</label>
            <label class="text-primary-font font-semibold">{{selectedOrder.fromLocation}}</label>
          </div>
           <div class="col-span-6">
            <label class="block text-secondary-font font-medium capitalize">to Location</label>
            <label class="text-primary-font font-semibold">{{selectedOrder.toLocation}}</label>
          </div>
<div class="col-span-4">
            <label class="block text-secondary-font font-medium capitalize">material</label>
            <label class="text-primary-font font-semibold">{{selectedOrder.material}}</label>
          </div>
           <div class="col-span-4">
            <label class="block text-secondary-font font-medium capitalize">distance</label>
            <label class="text-primary-font font-semibold">{{selectedOrder.distance}}</label>
          </div>
            <div class="col-span-4">
            <label class="block text-secondary-font font-medium capitalize">weight</label>
            <label class="text-primary-font font-semibold">{{selectedOrder.weight}}</label>
          </div>
            <div class="col-span-12">
            <label class="block text-secondary-font font-medium capitalize">standard Price</label>
            <label class="text-primary-font font-semibold">{{selectedOrder.standardPrice}}</label>
          </div>
        </div>
        <!-- update status -->
          <div class="mt-5" >
            <div class="grid grid-cols-12 gap-2 mb-2 content-end px-3 py-4 bg-gray-50 rounded-lg"  :key="index">
              <div class="col-span-12">
                <h2 class="font-bold ">Update Status</h2>
              </div>
                <div class="col-span-6">
                    <div class="">
                    <label class="block text-secondary-font font-medium capitalize">Select Status</label>
                   <select v-model="status.status" class="rounded  text-p1-font text-primary-font bg-transparent focus:ring-0 pl-2 bg-white border border-gray-300 py-2 w-full">
                    <option value="InProgress">Pickup</option>
                    <option value="Pending">Pending</option>
                    <option value="Success">Delivered</option>
                    <option value="Fail">Ruturn</option>
                   </select>  
                  
                    </div>
                </div>
             
                  <div class="col-span-4 flex justify-end items-end ">
                    <label></label>
            <button 
              class="bg-primary-color py-2.5 px-4 text-white rounded-lg w-full" 
          
             @click="updateStatus()">Update Status</button>
        </div>
            </div>
        </div>
        <!-- set price -->
        <div class="mt-5" >
            <div class="grid grid-cols-12 gap-2 mb-2 content-end px-3 py-4 bg-gray-50 rounded-lg"  :key="index">
              <div class="col-span-12">
                <h2 class="font-bold ">Add additional charge</h2>
              </div>
                <div class="col-span-4">
                    <div class="">
                    <label class="block text-secondary-font font-medium capitalize">Price</label>
                    <input v-model="driverPrices.price" type="text" placeholder="price" class="w-full border  rounded  text-p1-font text-primary-font  focus:ring-0 pl-2  border-gray-300 py-2  "  />
                    
                    </div>
                </div>
             
                <div class="col-span-4">
                    <div class="">
                    <label class="block text-secondary-font font-medium capitalize">hour</label>
                    <input v-model="driverPrices.hour" type="text" placeholder="hour" class="w-full border  rounded  text-p1-font text-primary-font  focus:ring-0 pl-2  border-gray-300 py-2 " />
                  
                    </div>
                </div>
                  <div class="col-span-4 flex justify-end items-end ">
                    <label></label>
            <button 
            :disabled="driverPrices.price <= 0 && driverPrices.hour <= 0" 
            :class="driverPrices.price <= 0 || driverPrices.hour <= 0?'cursor-not-allowed opacity-25':''"  class="bg-primary-color py-2.5 px-4 text-white rounded-lg w-full" 
            data-bs-dismiss="modal"
             @click="update()">Set</button>
        </div>
            </div>
        </div>     
  </div>
    
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  props:['selectedOrder'],
  data() {
    return {
      driver: {  },
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
    addPrice(){
      let priceObj =   {"price": "", "OrderId": "", "hour": "" }
      this.driver.driverPrices.push(priceObj)
    },
    getOrderByEmail() {
      let userId = localStorage.getItem("email");
     let commonPath = process.env.VUE_APP_SERVER
     console.log("commonPath",commonPath);
      let path = commonPath+"/api/auth/getUser/" + userId;
      axios.get(path, { withCredentials: true }).then((res) => {
        this.driver = res.data;
        this.updateUser()
        console.log(res);
      });
    },
    updateUser(){
  let commonPath = process.env.VUE_APP_SERVER
  this.driver.driverPrices= {"price": 0, "OrderId": 0, "hour": "0" }
  console.log("this.driver",this.driver);
       let path = "/api/auth/putUser";
       let driver = {user:this.driver}
      axios.post(commonPath+path,driver, { withCredentials: true }).then((res) => {
            console.log(res);
      });
    },
    updateStatus(){
      this.status.id = this.selectedOrder.id
  let commonPath = process.env.VUE_APP_SERVER
  this.driver.driverPrices= {"price": 0, "OrderId": 0, "hour": "0" }
  console.log("this.driver",this.driver);
       let path = "/api/v1/updateStatus";
      axios.post(commonPath+path,this.status, { withCredentials: true }).then((res) => {
            console.log("updateStatus",res);
      });
    },
    update(){
      this.driver.driverPrices.orderId = this.selectedOrder.id;
      this.driver.driverPrices.price = this.driverPrices.price;
      this.driver.driverPrices.hour = this.driverPrices.hour
      if(this.driverPrices.price <= 0){
        this.showPriceError = true
      }
      else if(this.driverPrices.hour <= 0){
        this.showHourError = true
      }
      else{
         let commonPath = process.env.VUE_APP_SERVER
       let path = "/api/auth/putUser";
       let driver = {user:this.driver}
      axios.post(commonPath+path,driver, { withCredentials: true }).then((res) => {
            console.log(res);
      });
      }
      
    }
  },
  mounted() {
    this.driverPrices.orderId  = this.selectedOrder.id;
    this.getOrderByEmail();
  },
};
</script>
<style lang="">
</style>