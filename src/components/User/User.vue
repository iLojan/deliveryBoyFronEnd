<template lang="">
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
                                <ul>
                                    <li><router-link class="text-primary-font pb-1" :to="{name:'manageAccount'}">Manage My Account</router-link></li>
                                    <li> <router-link class="text-primary-font pb-1" :to="{name:'profile'}">My Profile</router-link></li>
                                    <li><router-link class="text-primary-font pb-1" :to="{name:'profile'}">My Review</router-link></li>
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
                                    <li><a href=""  class="text-primary-font pb-1">All</a></li>
                                    <li><a href=""  class="text-primary-font pb-1">Active</a></li>
                                    <li><a href=""  class="text-primary-font pb-1">Pending</a></li>
                                    <li><a href=""  class="text-primary-font pb-1">Return</a></li>
                                    <li><a href=""  class="text-primary-font pb-1">Delivered</a></li>
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
    
}
</script>
<style lang="">
    
</style>