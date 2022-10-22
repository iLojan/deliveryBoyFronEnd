<template lang="">
  <div :class="classes" class="registration__address-formitem" @click="touched = true">
    <!-- <Listbox as="div" class="w-full" v-model="selectedItem" :disabled="disableComponent">
      <div class="h-8">
        <ListboxButton
          class="relative bg-white border-0 border-gray-300 rounded-md border-r-0 rounded-r-none  w-full  text-left cursor-default focus:outline-none focus:ring-0   sm:text-sm">
          <div class="md-input-box">
            <div v-clickoutside="onClickOutside" class="flex items-center justify-between"
              :class="{'md-input': selectedItem.label}">

              <span class="ml-1 block truncate text-p1-font" :class="{ 'showinred' : showErrorLabels }"
                :style="selectedItem.label?'color:text-primary-font':'color:#7d8499'">
                {{ selectedItem.label? selectedItem.label : 'placeholder' }}
              </span>
              <span class=" inset-y-0  flex items-center pointer-events-none" v-if="LoyaltyProgram !=='LoyaltyProgram'">
                <svg xmlns="http://www.w3.org/2000/svg" style="color:#6A7186" class="h-5 w-5" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
            <label v-if="selectedItem.label" class="md-label"> {{placeholder}} </label>
          </div>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions
            class="absolute z-10 mt-1  bg-white shadow-lg max-h-56 rounded-md py-1 md:w-80 w-72 md:ml-0 -ml-2  text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="item in items" :value="item" :key="item.value"
              v-slot="{ active, selectedItem }">
              <li
                :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                <div class="flex items-center">
                  <span class="whitespace-normal"
                    :class="[selectedItem ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                    {{ item.label }}
                  </span>
                </div>

                <span v-if="selectedItem" class="whitespace-normal"
                  :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                  >
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox> -->
    <div class="w-full">
        <label class="md-label"> {{placeholder}} </label>
         <select v-model="selectedItem" class="w-full">
      <option v-for="(item, index) in items" :key="index" :value="item.value">{{item.label}}</option>
    </select>
    </div>
   
  </div>
  <div class="text-xs text-red-500 font-medium px-2 pt-1 mb-2" v-if="showErrorLabels">
    <span>
      this.error
    </span>
  </div>
</template>
<script>
  export default {
    components: {
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      defaultSelection: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        required: true,
      },
      selection: {
        required: true,
      },
      error: {
        type: String,
        default: ""
      },
      LoyaltyProgram: {
        type: String,
        default: "null"
      },
      class: {
        type: String,
      },
      items: {
        type: Array,
        required: true,
        // format: [{ label: "", value: "" }, {}...]
        validator(value) {
          if (value.length > 0) {
            let arrayItem = value[0];
            return "label" in arrayItem && "value" in arrayItem;
          }
          return false;
        },
      }
    },
    emits: ["update:selection"],
    data() {
      return {
        touched: false,
        clickedOutside: false,
        selectedItem: {
          label: "ROLE_USER",
          value: "User"
        },
      };
    },
    beforeMount() {
      if (this.selection) {
        let findSelected = this.items.find(item => item.value === this.selection);
        if (findSelected) {
          this.selectedItem = findSelected;
        }
      } else if (this.defaultSelection) {
        this.selectedItem = this.items[0];
      }
    },
    watch: { 
       selectedItem(newSelection, oldSelection) {
        this.$emit('update:selection', newSelection);
      }
    },
    computed: {
      showErrorLabels() {
        return ((this.touched && this.clickedOutside) || this.$store.state.forceShowErrors) && this.error;
      },
      disableComponent() {
        return this.disabled || this.$store.state.disableForm;
      },
      classes() {
        return this.showErrorLabels ? `${this.class} border-red-500` : this.class;
      }
    },
    methods: {
      onClickOutside() {
        this.touched ? this.clickedOutside = true : this.clickedOutside = false
      }
    },
  };
</script>
<style >
  .showinred {
    color: rgb(239, 68, 68) !important;
  }
</style>