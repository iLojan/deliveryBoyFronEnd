<template lang="">
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
                  #
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
                  From
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
                  To
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
                  Total
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  create date
                </th>
                <th
                  scope="col"
                  class="
                    text-sm
                    font-medium
                    w-40
                    text-gray-900
                    px-6
                    py-4
                    text-left
                  "
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(order, index) in orders"
                :key="index"
                class="bg-gray-50 border-b"
              >
                <td class="px-6 py-4 text-sm font-medium text-gray-900">
                  {{ order.id }}
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{ order.fromLocation }}
                  <!-- {{getTime(order.updatedAt)}} -->
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{ order.toLocation }}
                </td>
                   <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{ order.total }}
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
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
                <td class="text-sm text-gray-900 font-light px-6 py-4">
                  {{ getDate(order.updatedAt) }}
                </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <button
                    @click="setOrder(order)"
                    class="
                      mb-3
                      border
                      text-p2-font
                      py-2
                      bg-secondary-color
                      text-white
                      w-full
                      px-1
                      rounded
                      font-medium
                      text-
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalLg"
                  >
                    Action
                  </button>
                </td>
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
      orders: "",
    };
  },
  methods: {
    getOrderDriverId() {
      let driverId = localStorage.getItem("id");
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/v1/orderDriverId/" + driverId;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.orders = this.filtertems(res.data);
      });
    },
    filtertems(data) {
      console.log("data", data);
      const searchObject = data.filter((order) => order.status === "InProgress");
      return searchObject;
    },
    getDate(date){
        console.log("date",date);
        let dt,time;
        dt = date.slice(0,10).replace(/-/g,'/')
        time = date.slice(11,19).replace(/-/g,'/')
        return dt +" "+ time
    },
    getTime(date){
        let newDate = new Date();
        console.log(newDate,"   ",newDate.getMinutes(),"date",newDate.getHours(),'===');
        let dt,time;
        dt = newDate.getHours()
        time = date.slice(11,19).replace(/-/g,'/')
        return dt +" === "+ time
    },
  },
  mounted() {
    this.getOrderDriverId();
  },
};
</script>
<style lang=""></style>
