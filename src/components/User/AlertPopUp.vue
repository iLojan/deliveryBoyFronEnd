<template >
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" >
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" 
          enter="ease-out duration-300" 
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" 
          leave="ease-in duration-200" 
          leave-from="opacity-100 translate-y-0 sm:scale-100" 
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                <div class="">
                 <div class="mt-3  sm:mt-0 sm:ml-4 sm:text-left">
               
                 <div class="sm:flex sm:items-start mt-2 items-center">
            
                <div class="w-full text-center">
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 text-p1-font">{{ errorData }}</p>
                  </div>
                </div>
              </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-1 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" 
                @click="hidden()"
                 ref="cancelButtonRef">Cancel</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
export default {
    props:['errorData'],
    components:{Dialog, DialogPanel, TransitionChild, TransitionRoot},
    data() {
        return {
          open:true  
        }
    },
    methods: {
        hidden(){
             this.$emit('hideAlert', false)              
            
        }
        
    },
    mounted() {
    //  this.open = this.showAlert
    },
}
</script>