<template>
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
                  User Details
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
                  Status Update
                </th>
               
               
              </tr>
            </thead>
            <tbody>
              <tr
            
                class="bg-gray-50 border-b" v-for="(order,index) in orders" :key="index"
              >
                <td class="px-6 py-4 text-sm font-medium text-gray-900">
                  {{order.id}}
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{order.fromLocation}}
                  <!--getTime(order.updatedAt)}} -->
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{order.toLocation}}
                </td>
               <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <span class="cursor-pointer text-green-700" @click="showUserDetails(order)">User details</span>
                  </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <button
                    class="
                      mb-3
                      border
                      text-p2-font
                      py-2
                      bg-secondary-color
                      text-white
                      w-full
                      px-1
                      rounded-full
                      font-medium
                      text-
                    "
                    @click="statusPopup(order.id)"
                  >
                    {{order.status}}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      <!--  -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="
              flex
              min-h-full
              items-end
              justify-center
              px-4
              py-12
              text-center
              sm:items-center sm:p-0
            "
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="
                  relative
                  transform
                  overflow-hidden
                  rounded-lg
                  bg-white
                  text-left
                  shadow-xl
                  transition-all
                  sm:my-8 sm:w-full sm:max-w-lg
                "
              >
                <div class="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
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
                    <option value="Pickup">Pickup</option>
                    <!-- <option value="Pending">Pending</option> -->
                    <option value="Delivered">Delivered</option>
                    <option value="Ruturn">Ruturn</option>
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
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!--  -->
    </div>
    <!--  -->
     <div class="" v-if="showUserPopup">
      <UserDetails @hidenDriverPopup="hidenDriverPopup" :selectedOrder="selectedOrder"></UserDetails>
    </div>
    <!--  -->
    <div class="" v-if="showAlert">
      <AlertPopup @hidenPopup="hidenPopup" alertMgs="Package Status Succesfully Updated" alertTitle="Status of Package" />
    </div>
</template>
<script>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import UserDetails from "./UserDetails.vue";
import AlertPopup from "../common/AlertPopup.vue";
import axios from "axios";
export default {
     components: {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
    AlertPopup,
    UserDetails
  },
  data() {
    return {
      showUserPopup:false,
      selectedOrder:'',
       open: false,
       orders:"",
       showAlert:"",
       status:{
       id:"",
       status: ""
      },
    }
  },
  methods: {
    showUserDetails(order){
this.selectedOrder = order;
this.showUserPopup = true;
    },
    hidenDriverPopup(event){
      this.showUserPopup = event
    },
    statusPopup(id){
      this.open = true;
      this.status.id = id
    },
     hidenPopup(event){
      this.showAlert = event;
      this.getOrderDriverId()
    },
    updateStatus(){
  let commonPath = process.env.VUE_APP_SERVER;
       let path = "/api/v1/updateStatus";
      axios.post(commonPath+path,this.status, { withCredentials: true }).then((res) => {
          //  console.log("updateStatus",res);
            this.open = false;
            this.showAlert = true
      });
    },
    getOrderDriverId() {
      let driverId = localStorage.getItem("id");
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/v1/orderDriverId/" + driverId;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.orders = this.filtertems(res.data);
        // console.log("data", this.orders);
      });
    },
    filtertems(data) {
     
      const searchObject = data.filter((order) => {return (order.status != "Cancel" && order.status != "Success")} );
      return searchObject;
    },
  },
  mounted() {
    this.getOrderDriverId();
  },
}
</script>
<style lang="">
    
</style>