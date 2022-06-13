<template lang="">
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
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Order #
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                   Price
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    From
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    To
                                </th>

                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Item
                                </th>
                                <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in allOrders" :key="index">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center">
                                      
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{item.id}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-center">{{item.price}}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center float-right">
                                      
                                        <p class="text-gray-900 whitespace-no-wrap text-center">{{item.fromLocation}}</p>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-center">
                                    {{item.toLocation}}
                                    </p>
                                </td>
                             
                             <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-center">
                                    {{item.material}}
                                    </p>
                                </td>
                                
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-primary-color">Manage</td>
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
            allOrders:'',
        }
    },
    methods: {
        getAllOrders(){
            const path = "http://localhost:8080/api/v1/orders";
             axios.get(path,{ withCredentials: true })
            .then(res => {
                this.allOrders = res.data;
               
            })
            .catch(error => {
                console.log("updateAccessTokenStatus", error)
            })
        }
    },
    mounted() {
        this.getAllOrders();
    },
}
</script>
<style lang="">
    
</style>