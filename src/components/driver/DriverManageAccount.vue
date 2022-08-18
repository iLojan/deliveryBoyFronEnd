<template >
    <div >
        <div class="tit text-h2 font-medium mb-3">Manage My Account</div>
        <div class="grid grid-cols-12  gap-4">
            <div class="md:col-span-6 col-span-12 card p-3">
                <div class="flex items-center ">
                    <span class="text-primary-font font-medium">Personal Profile</span><span class="text-p3-font text-primary-color pl-2">EDIT</span>
                </div>
                <div class="text-p2-font pb-1 mt-3">{{name}}</div>
                <div class="text-p2-font pb-1">{{email}}</div>
            </div>
            <div class="hidden">
            <div class="md:col-span-6 col-span-12 card p-3 ">
                <div class="flex items-center ">
                    <span class="text-primary-font font-medium">Address Book</span><span class="text-p3-font text-primary-color pl-2">EDIT</span>
                </div>
                <div class="text-p2-font pb-1 font-medium">Lojan Indiraja</div>
                <div class="text-p2-font pb-1">No 20 , thirumagal raod,Kallady Uppoday
                    Eastern - Batticaloa - Batticaloa Town</div>
                <div class="text-p2-font pb-1">(+94) 758907689</div>
            </div>
            </div>
        </div>

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
                                        {{item.price}} LKR
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
                                    <p class="text-gray-900 whitespace-no-wrap text-left text-sm">
                                        {{item.material}}
                                    </p>
                                </td>
                             
                                
                                <td class="px-2 text-left py-5 border-b border-gray-200 bg-white text-sm text-primary-color">Manage</td>
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
    data() {
        return {
            name:'',
            email:'',
            order:''
        }
     }, 
     methods: {
        getOrderByEmail(){
      let userId = localStorage.getItem("email")
      let path = "/api/v1/orderByEmail/"+userId;
    axios.get(path,{ withCredentials: true })
    .then(res=>{
      this.order = res.data
      console.log(res);
    })
    },
     },
     mounted() {
            this.name = localStorage.getItem('username');
            this.email = localStorage.getItem('email');
        this.getOrderByEmail()
    },
}
</script>
<style >
    
</style>