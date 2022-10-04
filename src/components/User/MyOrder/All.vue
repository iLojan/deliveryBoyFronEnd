<template>
    <div>
     
        <div class="py-8">
            <div>
                <div class="tit text-h2 font-medium mb-3">Recent Orders</div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Order 
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Price
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    From
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    To
                                </th>
                                  <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Staus
                                </th>
                                <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Item
                            </th>
                                <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in order" :key="index" class="text-left">
                                <td class="px-2 text-left py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center">
                                      
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap text-left text-sm">
                                                {{item.id}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-2 text-left py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-left text-sm">
                                        {{item.totla}} LKR
                                    </p>
                                </td>
                                <td class="px-2 text-left py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-left text-sm">
                                        {{item.fromLocation}}
                                    </p>
                                </td>

                                   

                                <td class="px-2 text-left py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-left text-sm">
                                        {{item.toLocation}}
                                    </p>
                                </td>
                                 <td class="px-2 text-left py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                                        v-if="order.status === 'New'"
                                                        :class="order.status === 'New' ? 'text-newColor' : ''"
                                                        >New</span
                                                    >
                                                    <span
                                                        v-if="order.status === 'InProgress'"
                                                        :class="
                                                        order.status === 'InProgress'
                                                            ? 'text-inProgressColor'
                                                            : 'rr'
                                                        "
                                                        >Pickup</span
                                                    >
                                                    <span
                                                        v-if="order.status === 'Success'"
                                                        :class="
                                                        order.status === 'Success' ? 'text-SuccessColor' : ''
                                                        "
                                                        >Delivered</span
                                                    >
                                                    <span
                                                        v-if="order.status === 'Fail'"
                                                        :class="order.status === 'Fail' ? 'text-failColor' : ''"
                                                        >Fail</span
                                                    >
                                    </td>
                                <td class="px-2 text-left py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-left text-sm">
                                        {{item.material}}
                                    </p>
                                </td>
                             
                                
                                <td class="px-2 text-left py-5 border-b border-gray-200 bg-white text-sm text-primary-color">{{item.status}}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    data() {
        return {
            order:'',
        }
    },
    methods: {
        getOrderByEmail(){
      let userId = localStorage.getItem("email")
      let commonPath = process.env.VUE_APP_SERVER
      let path = "/api/v1/orderByEmail/"+userId;
    axios.get(commonPath+path,{ withCredentials: true })
    .then(res=>{
      this.order = res.data
      console.log(res);
    })
    },
    },
    mounted() {
        this.getOrderByEmail();
    },
}
</script>
<style lang="">
    
</style>