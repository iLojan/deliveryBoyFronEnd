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
                                    <li><router-link  active-class="active" class="text-primary-font pb-2" :to="{name:'manageAccount'}">Manage My Account</router-link></li>
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
                    <router-view></router-view>
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
<style lang="">
    
</style>