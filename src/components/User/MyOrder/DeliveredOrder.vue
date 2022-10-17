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
                  Status
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-gray-50 border-b"
                v-for="(order, index) in orders"
                :key="index"
              >
                <td class="px-6 py-4 text-sm font-medium text-gray-900">
                  {{ order.id }}
                </td>
                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{ order.fromLocation }}
                  <!--getTime(order.updatedAt)}} -->
                </td>

                <td class="text-sm text-gray-900 w-64 font-light px-6 py-4">
                  {{ order.toLocation }}
                </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <span
                    class="
                      mb-3
                      border
                      text-p2-font
                      py-2
                      px-4
                      bg-green-500
                      text-white
                      w-full
                      rounded-full
                      font-medium
                      text-
                    "
                  >
                    Complete
                  </span>
                </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                  <button
                    class="
                      mb-3
                      ml-2
                      border
                      text-p2-font
                      py-2
                      bg-primary-color
                      text-white
                      w-full
                      px-4
                      rounded-full
                      font-medium
                      text-
                    "
                    @click="setRating(order.driverId,order.userId)"
                  >
                    Rating
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="
            flex
            min-h-full
            items-end
            justify-center
            px-4
            py-12
            text-center
            sm:items-center sm:p-0
          "
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="
                relative
                transform
                overflow-hidden
                rounded-lg
                bg-white
                text-left
                shadow-xl
                transition-all
                sm:my-8 sm:w-full sm:max-w-lg
              "
            >
              <div class="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                <div class="">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h2"
                      class="
                        text-lg
                        font-medium
                        leading-6
                        text-left text-gray-900
                      "
                      >Set Rating</DialogTitle
                    >
                    <div class="mt-2">
                      <div class="flex flex-col my-4">
                        <div class="flex flex-col">
                          <label class="text-primary-font mb-2 text-left"
                            >Select Rating</label
                          >
                          <select
                            class="
                              rounded-xl
                              border
                              w-56
                              px-4
                              py-3
                              border-gray-300
                            "
                            v-model="ratingValue"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                        <div class="flex flex-col mt-2">
                          <label class="text-primary-font mb-2 text-left"
                            >Add Comments</label
                          >
                          <textarea
                            rows="5"
                            class="border-gray-300 border rounded-xl"
                            v-model="comments"
                          ></textarea>
                        </div>
                        <div class="mt-3">
                          <button
                            class="
                              p-3
                              w-full
                              rounded-xl
                              bg-primary-color
                              text-white
                              font-medium
                            "
                            @click="saveRating()"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!--  -->
</template>
<script>
import axios from "axios";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  data() {
    return {
      orders: "",
      open: false,
      selectedId: "",
      driver: "",
      comments: "",
      selectedUserId:""
    };
  },
  methods: {
    getDriverById(id) {
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/auth/getUserById/" + id;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.driver = res.data;
      });
    },
    saveRating() {
      this.driver.driverRatings.push({
        rating: this.ratingValue,
        comments: this.comments,
        userId:this.selectedUserId
      });
      console.log("driverId", this.driver.driverRatings);
      let commonPath = process.env.VUE_APP_SERVER;
      const path = "/api/auth/putUser/";
      let driver = { user: this.driver };
      axios
        .post(commonPath + path, driver, { withCredentials: true })
        .then((res) => {
          if (res.data) {
            this.$emit("closePopup", false);
          }
        });
    },
    closePopup(event) {
      this.getOrderDriverId();
      this.open = event;
    },
    setRating(id,userId) {
      this.selectedId = id;
      this.selectedUserId = userId;
      this.open = true;
      this.getDriverById(id);
    },
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
      const searchObject = data.filter((order) => order.status === "Delivered");
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
