<template>
    <div>
        
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium  w-64 text-gray-900 px-6 py-4 text-left">
                From
              </th>
              <th scope="col" class="text-sm font-medium w-64 text-gray-900 px-6 py-4 text-left">
                To
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Material
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Distance
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Weight
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                price
              </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                create date
              </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Add Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index" class="bg-gray-100 border-b">
              <td class="px-6 py-4  text-sm font-medium text-gray-900">{{order.id}}</td>
              <td class="text-sm text-gray-900 w-64 font-light px-6 py-4 ">
                {{order.fromLocation}}
              </td>
              <td class="text-sm text-gray-900 w-64 font-light px-6 py-4 ">
                {{order.toLocation}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                {{order.material}}
              </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                {{order.distance}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                {{order.weight}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                {{order.price}}
              </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                {{getDate(order.updatedAt)}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
               <button @click="setOrder(order.id)" class="mb-3 border text-p2-font py-3 w-full px-3 rounded  font-medium text- " data-bs-toggle="modal"
              data-bs-target="#exampleModalLg"> add driver price </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
          <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLgLabel">

                Select delivery type

              </h5>
              <button type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body relative p-4">


              <AddPrice :selectedOrderId="selectedOrderId" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import axios from "axios"
import AddPrice from "./AddPrice.vue";
export default {
  components:{AddPrice},
    data() {
        return {
            orders:'',    
            selectedOrderId:'',       
            interval:null
        }
    },
    methods: {
         setOrder(id){
          this.selectedOrderId = id
         },
         getDate(date){
          let dt,time;
          dt = date.slice(0,10).replace(/-/g,'/')
           time = date.slice(11,16).replace(/-/g,'/')
          return dt +" "+ time
         },
        getOrderByEmail(){
            let commonPath = process.env.VUE_APP_SERVER
      let path = "/api/v1/orders/";    
      axios.get(commonPath+path,{ withCredentials: true })
    .then(res=>{
      this.orders = this.sortedItems(res.data);
    })
    },
     sortedItems: function(items) {
    return items.sort((a, b) => new Date(b.updatedAt)-new Date(a.updatedAt))
  },
      cancelAutoUpdate () {
            clearInterval(this.timer);
        }
    },
    mounted() {  
        this.getOrderByEmail();       
      },
       created(){
    this.interval = setInterval(() =>{
      this.getOrderByEmail()},8000)
  },
  beforeUnmount () {
      this.cancelAutoUpdate();
    }
}
</script>
<style lang="">
    
</style>