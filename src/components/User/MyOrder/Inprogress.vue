<template>
  <div>
 <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr >
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
                  From
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
                  To
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                
                >Driver</th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                
                >
                  Track Order
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  
                >
                  Cancel Order
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-50 border-b" v-for="(order,index) in orders" :key="index">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{order.id}}</td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{order.fromLocation}}
                  <!--getTime(order.updatedAt)}} -->
                </td>

                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{order.toLocation}}
                </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <span class="cursor-pointer text-green-700" @click="showDriverDetails(order)">Driver details</span>
                  </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <button
                    class="
                      mb-3
                      border
                      text-p2-font
                      py-2
                      px-4
                      bg-userDashboard-color
                      text-white
                      w-full
                      rounded-full
                      font-medium
                      text-
                    "
                    @click="trackOrder(order.status)"
                  >
                    Track
                  </button>
                </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <button
                    class="
                      mb-3
                      ml-2
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
                    :disabled="order.status != 'New' || order.status != 'Confirmed' "
                    :class="order.status != 'New' || order.status != 'Confirmed' ? 'opacity-25 cursor-not-allowed':'opacity-100 cursor-pointer'"
                    @click="cancelOrder(order.id)"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="" v-if="showDriverPopup">
      <DriverDetails @hidenDriverPopup="hidenDriverPopup" :selectedOrder="selectedOrder"></DriverDetails>
    </div>
      <div class="" v-if="showPopup">
         <TrackOrder @hidenPopup="hidenPopup" :selectTrackOrder="selectTrackOrder"></TrackOrder>
    </div>
    </div>
  </div>
</template>
<script>
import DriverDetails from "../DriverDetails.vue";
import TrackOrder from "./TrackOrder.vue"
import axios from "axios";
export default {
  components:{TrackOrder,DriverDetails},
  data() {
    return {
      showDriverPopup:false,
      orders: "",
      showAlert:"",
      errorData:"",
      selectTrackOrder:"",
      showPopup:false
    };
  },
  methods: {
    showDriverDetails(order){
this.selectedOrder = order;
this.showDriverPopup = true;
    },
    hidenDriverPopup(event){
      this.showDriverPopup = event
    },
    hidenPopup(event){
this.showPopup = event;
    },
    trackOrder(status){
      this.showPopup = true;
      this.selectTrackOrder = status;
    },
     cancelOrder(id){
     let status = {
        id:id,
        status: "Cancel"      
     }
      let commonPath = process.env.VUE_APP_SERVER
       let path = "/api/v1/updateStatus";
      axios.post(commonPath+path,status, { withCredentials: true }).then((res) => {
        this.showAlert = true;
        this.getOrderDriverId()
        this.errorData = "your order has been cancelled successfully"
            console.log("updateStatus",res);
      });
    },
    getOrderDriverId() {
      let userId = localStorage.getItem("id");
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/v1/orderByEmail/" + userId;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.orders = this.filtertems(res.data);
      });
    },
    filtertems(data) {
      console.log("data", data);
      const searchObject = data.filter(
        (order) => {return (order.status != "Cancel" && order.status != "Success")} 
      );
      return searchObject;
    },
    getDate(date) {
      console.log("date", date);
      let dt, time;
      dt = date.slice(0, 10).replace(/-/g, "/");
      time = date.slice(11, 19).replace(/-/g, "/");
      return dt + " " + time;
    },
    getTime(date) {
      let newDate = new Date();
      console.log(
        newDate,
        "   ",
        newDate.getMinutes(),
        "date",
        newDate.getHours(),
        "==="
      );
      let dt, time;
      dt = newDate.getHours();
      time = date.slice(11, 19).replace(/-/g, "/");
      return dt + " === " + time;
    },
  },
  mounted() {
    this.getOrderDriverId();
  },
};
</script>
<style>
.active-line{
}
</style>
