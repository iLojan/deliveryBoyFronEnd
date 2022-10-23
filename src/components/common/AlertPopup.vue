<template>
  <div>
    
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
                        ><h2 class="font-bold">{{alertTitle}}</h2>
                      </DialogTitle>
                      <div class="mt-2">
                     <div class="text-p1-font text-center sm:mt-0  sm:text-left">
                
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{{ alertMgs }}</p>
                  </div>
                </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-green-300  px-4 py-1 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" 
                @click="hide()"
                 ref="cancelButtonRef">Cancel</button>
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
  props: ["alertMgs","alertTitle"],
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
    };
  },
  methods: {
    hide() {
      this.open = false;
      this.$emit("hidenPopup",false)
    },
    update() {
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/v1/updateBargain";
      axios
        .post(commonPath + path, this.driverPrices, { withCredentials: true })
        .then((res) => {
          //console.log(res);
          this.hide();
        });
    },
  },
  mounted() {
    this.driverPrices = this.selectedBargainRate;
   // console.log("driverPrices",this.driverPrices);
  },
};
</script>
<style></style>
