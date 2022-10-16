<template >
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
                  <div class="w-full">
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
                        ><h2 class="font-bold">Track the Order</h2>
                        <span class="font-bold cursor-pointer" @click="hide()">X</span>
                      </DialogTitle>
                      <div class="mt-2">
                        <div class="mt-5">
                          <!-- {{driver.driverPrices}} -->
       <div class="flex status  active">
            <div class="mr-3  relative">
                <img class="status-img" src="../../../assets/img/state-done.svg" alt="" srcset="">
                <div class="active-line flex justify-center">
                    <img src="../../../assets/img/line.svg" alt="" srcset="">
                </div>
            </div>
            <div class="mt-1">
                <label class="text-primary-font font-medium">Order has been created</label>
            </div>
        </div>
        <div class="flex status ">
            <div class="mr-3  relative">
                <img class="status-img" src="../../../assets/img/state-done.svg" alt="" srcset="">
                <div class="active-line flex justify-center">
                    <img src="../../../assets/img/line.svg" alt="" srcset="">
                </div>
            </div>
            <div class="mt-1">
                <label class="text-secondary-font font-medium">Courier has been Confirmed</label>
               
            </div>
        </div>
           <div class="flex status ">
            <div class="mr-3  relative">
                <img class="status-img" v-if="!picked" src="../../../assets/img/state-next.stage.svg" alt="" srcset="">
                <img class="status-img" v-if="picked" src="../../../assets/img/state-done.svg" alt="" srcset="">
               
                <div class="active-line flex justify-center">
                    <img src="../../../assets/img/line.svg" alt="" srcset="">
                </div>
            </div>
            <div class="mt-1">
                <label class="text-secondary-font font-medium">Courier picked up the Parcel</label>
               
            </div>
        </div>
        <div class="flex status ">
            <div class="mr-3  relative">
               <img class="status-img" :src="derliverd?'./assets/img/state-done.svg':'./assets/img/state-next.stage.svg'" alt="" srcset="">
                <img class="status-img" v-if="!derliverd" src="../../../assets/img/state-next.stage.svg" alt="" srcset="">
                <img class="status-img" v-if=" derliverd" src="../../../assets/img/state-done.svg" alt="" srcset="">
               
            </div>
            <div class="mt-1">
                <label class="text-secondary-font font-medium">Derliverd</label>
               
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
export default {
    components:{ Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot},
    props:["selectTrackOrder"],
    data() {
        return {
            selectedLanguage:'',
              open: true,
              created:false,
              Confirmed:false,
              picked:false,
              derliverd:false
        }
    },
    methods: {
         hide() {
      this.open = false;
      this.$emit("hidenPopup",false)
    },
        getStatus(){
             switch (this.selectTrackOrder) {
        case "New": 
        this.created = true;
        this.Confirmed = false;
        this.picked = false;
        this.derliverd = false;
        ; break;
        case "Confirmed":
          this.created = true;
        this.Confirmed = true;
        this.picked = false;
        this.derliverd = false;
          break;
        case "Pickup": 
        this.created = true;
        this.Confirmed = true;
        this.picked = true;
        this.derliverd = false;
        break;
        case "Delivered": this.created = true;
        this.Confirmed = true;
        this.picked = true;
        this.derliverd = true; break;
        case "Ruturn": this.derliverd = false; break;
      }
        }
    },
    mounted() {
      this.getStatus()
    },
}
</script>
<style >
    
</style>