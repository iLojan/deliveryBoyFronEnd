<template>
    <div class="md:px-8  lg:w-10/12 md:10/12 w-full md:m-auto  md:p-0 p-3 md:mt-12">
        <div class="main">
            <div class="grid grid-cols-12 gap-4 px-3">
                <div class="col-span-3  pr-3" >
                    <div class="menu">
                        <div class="">
                            <div class="title font-medium ">
                                Manage My Account 
                            </div>
                            <div class="list p-3">
                                <ul class="driver">
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'DriverManageAccount'}">Manage My Account</router-link></li>
                                    <!-- <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'order-list'}">Orders</router-link></li> -->
                                    <!-- <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'addPrice'}">Add Price</router-link></li> -->
                                    <li> <router-link active-class="active" class="text-gray-400 cursor-not-allowed pb-2" :to="{name:'profile'}">My Profile</router-link></li>
                                    <!-- <li><router-link active-class="active" class="text-gray-400 cursor-not-allowed pb-2" :to="{name:'profile'}">My Review</router-link></li> -->
                                </ul>
                            </div>
                        </div>
                        <!--  -->
                        <div class="">
                            <div class="title font-medium">
                                My Order 
                            </div>
                            <div class="list p-3">
                                <ul class="driver"> 
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'order-list'}">Available Order</router-link></li>
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'driverBargain'}">Bargain</router-link></li>
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'driverOrders'}">My Order</router-link></li>
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'MyRating'}">My Rating</router-link></li>
                                    <!-- <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'allOrder',params:allOrders}">All</router-link></li> -->
                                    <!-- <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'driverOrders'}">Orders</router-link></li> -->
                                    
                                    <!-- <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'pendingOrder'}">Pending</router-link></li> -->
                                    <!-- <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'returnOrder'}">Return</router-link></li> -->
                                    <li><router-link active-class="active" class="text-primary-font pb-2" :to="{name:'deliveredOrder'}">Delivered</router-link></li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="col-span-9  pr-3" >
                     <h2 class="w-full text-white font-semibold bg-secondary-color text-h2-font p-4 rounded-lg text-center mb-0">Driver Dashboard</h2>
                  <div class=" p-3 border border-0 rounded-lg" style="border-color: #B9966E !important;">
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
<style>
 .driver .active{
        color: #B9966E  !important;
    font-weight: 600 !important;
    }   
</style>