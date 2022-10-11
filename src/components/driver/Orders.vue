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
                  User Id
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
                  User Phone
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
                  Status
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
                  0758907689
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
                    
                  >
                    Stetus Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
                        class="text-lg font-medium leading-6 text-left text-gray-900"
                        >Set Rating</DialogTitle
                      >
                      <div class="mt-2">
                      <div class="flex flex-col my-4">
            <div class="flex flex-col">
                <label class="text-primary-font mb-2 text-left">Select Rating</label>
                <select class="rounded-xl border w-56 px-4 py-3 border-gray-300" v-model="ratingValue">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>
            </div>
             <div class="flex flex-col mt-2">
                <label class="text-primary-font mb-2 text-left">Add Comments</label>
              <textarea rows="5" class="border-gray-300 border rounded-xl" v-model="comments"></textarea>
            </div>
            <div class=" mt-3">

                <button class="p-3 w-full rounded-xl bg-primary-color text-white font-medium" @click="saveRating()">Save</button>
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
     components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
  },
  data() {
    return {
       open: false,
    }
  },
}
</script>
<style lang="">
    
</style>