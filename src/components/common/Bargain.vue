<template >
    <div>
         <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                 Order Id
                </th>
                <th
                  scope="col"
                  class="
                    text-sm
                    font-medium
                    w-64
                    text-gray-900
                    px-6
                    py-4
                    text-left
                  "
                >
                  Driver Id
                </th>
                <th
                  scope="col"
                  class="
                    text-sm
                    font-medium
                    w-64
                    text-gray-900
                    px-6
                    py-4
                    text-left
                  "
                >
                  Final Price
                </th>
                <th
                  scope="col"
                  class="
                    text-sm
                    font-medium
                    w-64
                    text-gray-900
                    px-6
                    py-4
                    text-left
                  "
                >
                  Duration
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Bargain
                </th>
                 <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                ></th>
               
              </tr>
            </thead>
            <tbody>
              <tr
            
                class="bg-gray-50 border-b"
                v-for="(bargainRate,index) in bargain" :key="index">
                 
                <td class="px-6 py-4 text-sm font-medium text-gray-900">
                  {{bargainRate.orderId}}
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{bargainRate.driverId}}
                  <!--getTime(order.updatedAt)}} -->
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{bargainRate.price}}
                </td>
                   <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                 {{bargainRate.hour}}
                </td>
              <td class="text-sm  text-gray-900 font-light px-2 w-40 py-4">
                    <button
                    class="
                      mb-3 ml-2
                      border
                      text-p2-font
                      py-2
                      bg-primary-color
                      text-white
                      w-full
                      px-4
                      rounded-full
                      font-medium
                      text-
                    "
                  @click="reject(bargainRate.id)"
                  >
                    Reject
                  </button>
              </td>
                <td class="text-sm  text-gray-900 font-light px-2 w-40 py-4">
                    
                  <button
                    class="
                      mb-3
                      border
                      text-p2-font
                      py-2
                      px-4
                      bg-green-500
                      text-white
                      w-full                    
                      rounded-full
                      font-medium
                      text-
                    "
                    @click="confirm(bargainRate)"
                  
                  >
                    Confirm
                  </button>
                    
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props:['bargain'],
    data() {
      return {
        order:"",
        selectedBargain:''
      }
    },
    methods: {
      confirm(data){
        this.selectedBargain = data
        console.log("data",data)
        this.getOrder(data.orderId)
      },
      reject(id){
        this.$emit("deleteBargain",id)
      },
      getOrder(id){
      console.log("id",id);
      let commonPath = process.env.VUE_APP_SERVER
      let path = "/api/v1/orderById/"+id;
    axios.get(commonPath+path,{ withCredentials: true })
    .then(res=>{
      this.order = res.data
      this.updateOrder();
      console.log(res);
    })
    },
    updateOrder(){
      this.order.driverId=this.selectedBargain.driverId;
      this.order.duration=this.selectedBargain.hour;
      this.order.driverExtraPrice=this.selectedBargain.price;
      this.order.total=this.selectedBargain.price+ this.order.standardPrice;
      this.order.status="Confirmed";
      this.selectedBargain.status = "Confirmed"
console.log("this.order",this.order);
this.updateOrderDetails();
    },
     updateOrderDetails() {
      console.log("orderNow", this.order);
      let commonPath = process.env.VUE_APP_SERVER
      const path = "/api/v1/addOrder";
      axios
        .post(commonPath+path, this.order, { withCredentials: true })
        .then((res) => {
          console.log(res);
          this.updateBargainStatus()
         
        })
        .catch((error) => {
          console.log("updateAccessTokenStatus", error);
        });
    },
    updateBargainStatus() {
      console.log("selectedBargainNow", this.selectedBargain);
      let commonPath = process.env.VUE_APP_SERVER
      const path = "/api/v1/updateBargainStatus";
      axios
        .post(commonPath+path, this.selectedBargain, { withCredentials: true })
        .then((res) => {
          console.log(res);
          this.$router.push("/user/my-in-progress")
         
        })
        .catch((error) => {
          console.log("updateAccessTokenStatus", error);
        });
    },
    },
}
</script>
<style >
    
</style>