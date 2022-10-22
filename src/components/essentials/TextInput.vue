<template lang="">
        <div class="registration__address-formitem">
            <input class="forsubmitinput2 ring-ringb-color" :placeholder="label"
                :value="userInput" 
                @input="$emit('update:userInput', $event.target.value.trim())" 
                @keyup="touched = true" 
                @keypress="isLetter($event)"
                @focus="focusInput = true"
                @focusout="focusInput = false"
                :type="inputType"
                :disabled="disableInput"
                :class=" showErrorLabels ? 'empty' : '' "
                >
            <label :for="label" class="" :class=" focusInput || userInput ? 'opacity-100' : 'opacity-0' ">
                {{ label }}
            </label>
            <div class="invalid-feedback block" v-if="showErrorLabels && checkInputType">
               {{error}}
            </div>
        </div>
</template>
<script>
export default {
  props: {
    isLetter:{ type: Function },
    userInput: {
      type: String,
      required: true,
    },
    inputType:{
      type: String,
      default: "text",
    },
    id: {
      type: String,
      default: "text-input",
    },
    label: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    addressError: {
      type: Boolean,
      default: false
    },
  },
  emits: ["update:userInput"],
  data() {
    return {
      touched: false,
      focusInput: false,
    };
  },
  computed: {
    showErrorLabels() {
      return  (this.touched || this.$store.state.forceShowErrors) && this.error;
    },
    disableInput() {
      return this.disabled;
    },
    checkInputType() {
      if(this.label === "courierDetails.commonFormInputs.Email"){
        if(this.focusInput) return false;
        else return true;
      }
      else return true;
    }
  },
  methods: {},
};
</script>
<style>
[type='text']:focus {
  --tw-ring-color: #DAB267 !important;
  --tw-ring-offset-color: unset !important;
  border: 0 !important;
}
</style>