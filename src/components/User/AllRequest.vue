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
              <tr class="bg-gray-50 border-b"  v-for="(bargainRate,index) in bargain" :key="index">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{bargainRate.id}}</td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{bargainRate.driverId}}
                  <!--getTime(order.updatedAt)}} -->
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{bargainRate.price}}
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{bargainRate.hour}}
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
                    @click="BargainPopup(bargainRate)"
                  >
                    Bargain
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="" v-if="showPopup">
      <BargainPopup @hidenPopup="hidenPopup" :selectedBargainRate="selectedBargainRate"></BargainPopup>
    </div>
  </div>
</template>
<script>
import BargainPopup from "../common/BargainPopup.vue";
import axios from "axios";
export default {
  components: { BargainPopup },
  data() {
    return {
      showPopup: false,
      bargain:"",
      selectedBargainRate:"",
      interval:null
    };
  },
  methods: {
    hidenPopup(event){
      this.showPopup = event
    },
    BargainPopup(data) {
      this.selectedBargainRate = data
      this.showPopup = true;
    },
    getBargainByUserId() {
      let commonPath = process.env.VUE_APP_SERVER;
      let newBargain,
        userId = localStorage.getItem("id");
      let path = "/api/v1/bargainByUserId/" + userId;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
          newBargain = this.filtertems(res.data)
        this.bargain = this.sortedItems(newBargain);
      });
    },
     filtertems(data) {
      console.log("data", data);
      const searchObject = data.filter((bargain) => bargain.status === "Open");
      return searchObject;
    },
    sortedItems: function (items) {
      return items.sort((a, b) => new Date(b.id) - new Date(a.id));
    },
    cancelAutoUpdate () {
            clearInterval(this.timer);
        }
  },
   mounted() {
        this.getBargainByUserId()
    },
    created(){
    this.interval = setInterval(() =>{
      this.getBargainByUserId()},8000)
  },
  beforeUnmount () {
      this.cancelAutoUpdate();
    }
};
</script>
<style></style>
