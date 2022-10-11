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
                  Driver Id
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
                  Price
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
                  Duration
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Bargain
                </th>
               
              </tr>
            </thead>
            <tbody>
              <tr
            
                class="bg-gray-50 border-b"
              >
                <td class="px-6 py-4 text-sm font-medium text-gray-900">
                  1
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  12
                  <!--getTime(order.updatedAt)}} -->
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  250
                </td>
                   <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                 1 hour
                </td>
              
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <button
                    class="
                      mb-3
                      border
                      text-p2-font
                      py-2
                      bg-green-500
                      text-white
                      w-full
                      px-1
                      rounded-full
                      font-medium
                      text-
                    "
                    @click="BargainPopup()"
                  >
                    Final Price
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="" v-if="showPopup">
        <BargainPopup></BargainPopup>
    </div>
    </div>
</template>
<script>
import BargainPopup from "../common/BargainPopup.vue";
export default {
    components:{BargainPopup},
    data() {
        return {
          showPopup:false  
        }
    },
    methods: {
        BargainPopup(){
            this.showPopup = true
        }
    },
}
</script>
<style>
    
</style>