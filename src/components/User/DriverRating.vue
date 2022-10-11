<template>
  <div>
    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-center text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Name
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-center text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Email
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-center text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Rating
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-center text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(driver, index) in driverList"
            :key="index"
            class="text-center"
          >
            <td
              class="
                px-2
                text-center
                py-5
                border-b border-gray-200
                bg-white
                text-sm
              "
            >
              <p class="text-gray-900 whitespace-no-wrap text-center text-sm">
                {{ driver.name }}
              </p>
            </td>
            <td
              class="
                px-2
                text-center
                py-5
                border-b border-gray-200
                bg-white
                text-sm
              "
            >
              <p class="text-gray-900 whitespace-no-wrap text-center text-sm">
                {{ driver.email }}
              </p>
            </td>
            <td
              class="
                px-2
                text-center
                py-5
                border-b border-gray-200
                bg-white
                text-sm
              "
            >
              <p class="text-gray-900 whitespace-no-wrap text-center text-sm">
                {{ showRating(driver?.driverRatings) }}
              </p>
            </td>

            <td
              class="
                px-2
                text-center
                py-5
                border-b border-gray-200
                bg-white
                cursor-pointer
                text-sm text-primary-color
              "
              @click="setRating(driver)"
            >
              Add rating
            </td>
          </tr>
        </tbody>
      </table>
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
                        class="text-lg font-medium leading-6 text-left text-gray-900"
                        >Set Rating</DialogTitle
                      >
                      <div class="mt-2">
                        <AddDriverRating
                          :driverId="selectedId"
                          @closePopup="closePopup"
                        ></AddDriverRating>
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
  </div>
</template>
<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import axios from "axios";
import AddDriverRating from "./AddDriverRating.vue";
export default {
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    AddDriverRating,
  },
  data() {
    return {
      driverList: [],
      selectedId: "",
      open: false,
       rating:0,
      total:0,
      ratingCal:0,
    };
  },
  methods: {
    setRating(id) {
      this.selectedId = id;
      this.open = true;
    },
    closePopup(event) {
        this.getAllDriver()
      this.open = event;
    },
    getAllDriver() {
      let commonPath = process.env.VUE_APP_SERVER;
      const path = "/api/auth/getUserByRole/ROLE_DRIVER";
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.driverList = res.data;
      });
    },
    showRating(ratingList) {
      console.log("ratingList", ratingList);
    let ratingCal = 0,total =0;
      if (ratingList.length > 0) {
        console.log("ratingList",ratingList.length);
        for (let index = 0; index < ratingList.length; index++) {
                     total += ratingList[index].rating;
        }
        // ratingList.forEach((rate) => {
        //   total += rate.rating;
        // });
        ratingCal = (total / ratingList.length).toFixed(1);
      }
      return ratingCal;
    },
  },
  mounted() {
    this.getAllDriver();
  },
};
</script>
<style lang=""></style>