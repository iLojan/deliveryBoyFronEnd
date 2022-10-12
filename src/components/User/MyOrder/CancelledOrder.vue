<template>
  <div>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr >
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
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Track Order
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Cancel Order
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-50 border-b" v-for="(order,index) in orders" :key="index">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{order.id}}</td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{order.fromLocation}}
                  <!--getTime(order.updatedAt)}} -->
                </td>

                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{order.toLocation}}
                </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  {{order.total}}
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
      showAlert:"",
      errorData:""
    };
  },
  methods: {
    getOrderDriverId() {
      let userId = localStorage.getItem("id");
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/v1/orderByEmail/" + userId;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.orders = this.filtertems(res.data);
      });
    },
    filtertems(data) {
      console.log("data", data);
      const searchObject = data.filter(
        (order) => order.status === "Cancel"
      );
      return searchObject;
    },
    getDate(date) {
      console.log("date", date);
      let dt, time;
      dt = date.slice(0, 10).replace(/-/g, "/");
      time = date.slice(11, 19).replace(/-/g, "/");
      return dt + " " + time;
    },
    getTime(date) {
      let newDate = new Date();
      console.log(
        newDate,
        "   ",
        newDate.getMinutes(),
        "date",
        newDate.getHours(),
        "==="
      );
      let dt, time;
      dt = newDate.getHours();
      time = date.slice(11, 19).replace(/-/g, "/");
      return dt + " === " + time;
    },
  },
  mounted() {
    this.getOrderDriverId();
  },
};
</script>
<style lang=""></style>
