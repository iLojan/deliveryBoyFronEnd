<template >
  <div>
    <div class="">
        
          <div class="flex justify-between items-center mb-5">
            <h2 class="font-semibold text-primary-font text-h2-font">Add additional charge</h2>
            <button type="" class="bg-secondary-color py-2 px-4 text-white rounded-lg" @click="addPrice()">Add Price </button>
        </div>
        {{driver.driverPrices}}
        <div class="" v-if="driver.driverPrices">
            <div class="grid grid-cols-12 gap-2 mb-2"   v-for="(item, index) in driver.driverPrices" :key="index">
                <div class="col-span-4">
                    <div class="">
                    <label>Price</label>
                    <input v-model="item.price" type="text" placeholder="price" class="input border border-gray-300 py-2 w-full mb-3"  />
                    </div>
                </div>
                <div class="col-span-4">
                    <div class="">
                    <label>Distance</label>
                    <input v-model="item.distance" type="text" placeholder="kg"  class="input border border-gray-300 py-2 w-full mb-3" />
                    </div>
                </div>
                <div class="col-span-4">
                    <div class="">
                    <label>time</label>
                    <input v-model="item.hour" type="text" placeholder="hour" class="input border border-gray-300 py-2 w-full mb-3" />
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
  data() {
    return {
      driver: "",
    };
  },
  methods: {
    addPrice(){
let priceObj =   {"price": "", "distance": "", "hour": "" }
this.driver.driverPrices.push(priceObj)
    },
    getOrderByEmail() {
      let userId = localStorage.getItem("email");
      let path = "/api/auth/getUser/" + userId;
      axios.get(path, { withCredentials: true }).then((res) => {
        this.driver = res.data;
        console.log(res);
      });
    },
    update(){
        let path = "api/auth/putUser";
        let driver = {user:this.driver}

           axios.post(path,driver, { withCredentials: true }).then((res) => {
            console.log(res);
      });
    }
  },
  mounted() {
    this.getOrderByEmail();
  },
};
</script>
<style lang="">
</style>