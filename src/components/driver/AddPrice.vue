<template >
  <div>
    <div class="">
        
          <div class="flex justify-between items-center mb-5">
            <h2 class="font-semibold text-primary-font text-h2-font">Add additional charge {{selectedOrderId}}</h2>
            <button type="" class="bg-secondary-color py-2 px-4 text-white rounded-lg" @click="addPrice()">Add Price </button>
        </div>
        <!-- {{driver.driverPrices}} -->
        <div class="" >
            <div class="grid grid-cols-12 gap-2 mb-2"  :key="index">
                <div class="col-span-4">
                    <div class="">
                    <label>Price</label>
                    <input v-model="driverPrices.price" type="text" placeholder="price" class="input border border-gray-300 py-2 w-full mb-3"  />
                    </div>
                </div>
             
                <div class="col-span-4">
                    <div class="">
                    <label>time</label>
                    <input v-model="driverPrices.hour" type="text" placeholder="hour" class="input border border-gray-300 py-2 w-full mb-3" />
                    </div>
                </div>
            </div>
        </div>
         <div class="flex justify-end items-center mb-5">
            <button type="" class="bg-primary-color py-2 px-4 text-white rounded-lg" @click="update()">Save</button>
        </div>
      
    </div>
    
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  props:['selectedOrderId'],
  data() {
    return {
      driver: {  },
       driverPrices:{
price:0,
hour:"",
orderId:0
      },
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
    update(){
      this.driver.driverPrices.orderId = this.selectedOrderId;
      this.driver.driverPrices.price = this.driverPrices.price;
      this.driver.driverPrices.hour = this.driverPrices.hour
       let commonPath = process.env.VUE_APP_SERVER
       let path = "/api/auth/putUser";
       let driver = {user:this.driver}
      axios.post(commonPath+path,driver, { withCredentials: true }).then((res) => {
            console.log(res);
      });
    }
  },
  mounted() {
    this.driverPrices.orderId  = this.selectedOrderId;
    this.getOrderByEmail();
  },
};
</script>
<style lang="">
</style>