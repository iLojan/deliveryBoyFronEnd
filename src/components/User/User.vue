<template lang="">
    <div class="md:px-8  lg:w-10/12 md:10/12 w-full md:m-auto  md:p-0 p-3 md:mt-12">
        <div class="main">
            <div class="grid grid-cols-12 gap-4 px-3">
                <div class="col-span-3  pr-3" >
                    <div class="menu">
                        <div class="">
                            <div class="title font-medium ">
                                My Account
                            </div>
                            <div class="list p-3">
                                <ul>
                                    <li><router-link   class="text-primary-font pb-2" :to="{name:'manageAccount'}">Manage My Account</router-link></li>
                                    <li><router-link  active-class="active" class="text-primary-font pb-2" :to="{name:'profile'}">My Profile</router-link></li>
                                    <!-- <li><router-link  active-class="active" class="text-primary-font pb-2" :to="{name:'addRating'}">My Review</router-link></li> -->
                                </ul>
                            </div>
                        </div>
                        <!--  -->
                        <div class="">
                            <div class="title font-medium">
                                My Order
                            </div>
                            <div class="list p-3">
                                  <ul> 
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'allRequest'}">Request</router-link></li>
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'userBargain'}">Bargain</router-link></li>
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'my-inprogress'}">Confirm</router-link></li>
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'my-deliveredOrder'}">Complete Order</router-link></li>
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'cancelledOrder'}">Cancelled</router-link></li>
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'my-returnOrder'}">Return</router-link></li>
                                    
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="col-span-9  pr-3" >
                      <div class="flex justify-end py-1 px-3 text-green-700">
                        <router-link class="flex items-center bg-green-700 text-white p-3 rounded-lg" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                       <span class="pl-2">Home</span> </router-link>
                    
                     </div>
                    <h2 class="w-full text-white font-semibold text-h2-font p-4 rounded-lg text-center mb-0" style="    background: #3BA3B1;">User Dashboard</h2>
                   <div class=" p-3 border border-0 rounded-lg" style="border-color: #3BA3B1 !important;">
                    <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            allOrders:'',
        }
    },
   
}
</script>
<style >
    
</style>