<template>
  <div>
      
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
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h2"
                        class="
                          text-lg
                          font-medium
                          leading-6
                          text-left
                          flex
                          justify-between
                          text-gray-900
                        "
                        ><h2 class="font-bold">Driver Details</h2>
                        <span class="font-bold cursor-pointer" @click="hide()">X</span>
                      </DialogTitle>
                      <div class="mt-2">
                        <div class="mt-5">
                          <!-- {{driver.driverPrices}} -->
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6 ">
            <label class="block text-secondary-font font-medium capitalize">Driver Name</label>
            <label class="text-primary-font font-medium">{{driver?.fistName}} {{driver?.lastName}}</label>
          </div>
           <div class="col-span-6">
            <label class="block text-secondary-font font-medium capitalize">Driver Phone Number</label>
            <label class="text-primary-font font-medium">{{driver?.phoneNumber}}</label>
          </div>
<div class="col-span-6">
            <label class="block text-secondary-font font-medium capitalize">Driver Email</label>
            <label class="text-primary-font font-medium">{{driver?.email}}</label>
          </div>
           <div class="col-span-6">
            <label class="block text-secondary-font font-medium capitalize">Driver Rating</label>
            <label class="text-primary-font font-medium">{{ratingCal}}</label>
          </div>
        </div>
    <!--  -->
    <h3 class="font-bold mt-4">Bargain</h3>
                          <div
                            class="
                              grid grid-cols-12
                              gap-2
                              mb-2
                              content-end
                              py-1
                              bg-gray-50
                              rounded-lg
                            "
                          >
                            <div class="col-span-12"></div>
                            <div class="col-span-4">
                              <div class="">
                                <label
                                  class="
                                    block
                                    text-secondary-font
                                    font-medium
                                    capitalize
                                  "
                                  >Price</label
                                >
                                <input
                                  v-model="driverPrices.price"
                                  type="text"
                                  placeholder="price"
                                  class="
                                    w-full
                                    border
                                    rounded
                                    text-p1-font text-primary-font
                                    focus:ring-0
                                    pl-2
                                    border-gray-300
                                    py-2
                                  "
                                />
                              </div>
                            </div>

                            <div class="col-span-4">
                              <div class="">
                                <label
                                  class="
                                    block
                                    text-secondary-font
                                    font-medium
                                    capitalize
                                  "
                                  >hour</label
                                >
                                <input
                                  v-model="driverPrices.hour"
                                  type="text"
                                  placeholder="hour"
                                  class="
                                    w-full
                                    border
                                    rounded
                                    text-p1-font text-primary-font
                                    focus:ring-0
                                    pl-2
                                    border-gray-300
                                    py-2
                                  "
                                />
                              </div>
                            </div>
                            <div class="col-span-4 flex justify-end items-end">
                              <label></label>
                              <button
                                :disabled="
                                  driverPrices.price <= 0 &&
                                  driverPrices.hour <= 0
                                "
                                :class="
                                  driverPrices.price <= 0 ||
                                  driverPrices.hour <= 0
                                    ? 'cursor-not-allowed opacity-25'
                                    : ''
                                "
                                class="
                                  bg-userDashboard-color
                                  py-2.5
                                  px-4
                                  text-white
                                  rounded-lg
                                  w-full
                                "
                                @click="update()"
                              >
                                Sent
                              </button>
                              <!-- @click="update()" -->
                            </div>
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
export default {
  props: ["selectedBargainRate"],
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  data() {
    return {
      driverPrices: {},
      open: true,
      driver:'',
      ratingCal :0
    };
  },
  methods: {
    hide() {
      this.open = false;
      this.$emit("hidenPopup",false)
    },
    update() {
      this.driverPrices.type="Bargain";
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/v1/updateBargain";
      axios
        .post(commonPath + path, this.driverPrices, { withCredentials: true })
        .then((res) => {
          console.log(res);
          this.hide();
        });
    },
    getDriverById(id) {
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/auth/getUserById/" + id;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.driver = res.data;
        this.showRating()
        console.log("driver",this.driver);
      });
    },
     showRating() {
      console.log("ratingList", this.driver.driverRatings);
    let total =0,totalRating;
      if (this.driver.driverRatings.length > 0) {
        console.log("this.driver.driverRatings",this.driver.driverRatings.length);
        for (let index = 0; index < this.driver.driverRatings.length; index++) {
                     total += this.driver.driverRatings[index].rating;
        }
        // this.driver.driverRatings.forEach((rate) => {
        //   total += rate.rating;
        // });
        totalRating = (total / this.driver.driverRatings.length).toFixed(1);
        this.ratingCal = totalRating +"("+this.driver.driverRatings.length +")"
      }
    },
  },
  mounted() {
    this.driverPrices = this.selectedBargainRate;    
    this.getDriverById(this.selectedBargainRate.driverId)
    console.log("driverPrices",this.driverPrices);
  },
};
</script>
<style></style>
