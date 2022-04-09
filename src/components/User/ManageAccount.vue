<template >
    <div>
        <div class="tit text-h2 font-medium mb-3">Manage My Account</div>
        <div class="grid grid-cols-12  gap-4">
            <div class="md:col-span-6 col-span-12 card p-3">
                <div class="flex items-center ">
                    <span class="text-primary-font font-medium">Personal Profile</span><span class="text-p3-font text-primary-color pl-2">EDIT</span>
                </div>
                <div class="text-p2-font pb-1">Ilojan</div>
                <div class="text-p2-font pb-1">ilojan@gmail.com</div>
            </div>
            <div class="md:col-span-6 col-span-12 card p-3">
                <div class="flex items-center ">
                    <span class="text-primary-font font-medium">Address Book</span><span class="text-p3-font text-primary-color pl-2">EDIT</span>
                </div>
                <div class="text-p2-font pb-1 font-medium">Lojan Indiraja</div>
                <div class="text-p2-font pb-1">No 20 , thirumagal raod,Kallady Uppoday
                    Eastern - Batticaloa - Batticaloa Town</div>
                <div class="text-p2-font pb-1">(+94) 758907689</div>
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
                                    Placed On
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Items
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Total
                                </th>
                                <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center">
                                      
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                20612
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-center">05/01/2022</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center float-right">
                                      
                                        <div class="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                                alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-center">
                                    Rs. 1,455
                                    </p>
                                </td>
                             
                                
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-primary-color">Manage</td>
                            </tr>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                      
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                20612
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-center">05/01/2022</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center float-right">
                                      
                                        <div class="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                                alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap text-center">
                                    Rs. 1,455
                                    </p>
                                </td>
                             
                                
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm  text-primary-color">Manage</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>