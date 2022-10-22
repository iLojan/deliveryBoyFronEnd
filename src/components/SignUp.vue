<template>
  <div class="">
    <div class="mb-24 p-10 pt-5 mx-auto flex rounded w-5/12" >
      <div class="w-full    rounded-xl py-6 px-8">
        <h1 class="text-h1-font text-center mb-12">Sign up</h1>
        <div class="mb-3">
             <TextInput v-model:userInput="user.name" inputType="text" :isLetter="isLetter" label="Name"
                :error="formErrorMap.has('name')? formErrorMap.get('name') : null"></TextInput>    
            
          </div>
           <div class="mb-3">
             <TextInput v-model:userInput="user.username" inputType="text" :isLetter="valid" label="User Name"
                :error="formErrorMap.has('username')? formErrorMap.get('username') : null"></TextInput>    
            
          </div>
             <div class="mb-3">  
                <TextInput v-model:userInput="user.email" inputType="text" :isLetter="valid" label="Email"
                :error="formErrorMap.has('email')? formErrorMap.get('email') : null"></TextInput>
            
          </div>
           <div class="mb-3 relative">  
                <TextInput v-model:userInput="user.password" :inputType="showPassword?'password':'text'" :isLetter="valid" label="Password"
                :error="formErrorMap.has('password')? formErrorMap.get('password') : null"></TextInput>
                 <span @click="toggleShow"
                    class="cursor-pointer font-bold text-center text-primary-font rounded-l absolute right-3 top-4">
                        <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                                <!-- show -->
                        <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
           </div>

           <div class="mb-3">  
                  <CustomSelect :class="'flex border rounded-lg px-2 pt-4 pb-1 registration__address-formitem'" placeholder="Select Role"
              :items="role" :error="formErrorMap.has('role')? formErrorMap.get('role') : null"
              v-model:selection="user.role">
            </CustomSelect>
          </div>

      

        <div class="col-span-1 mb-2">
          <span
            @click="signUp"
            class="
              border-2 border-primary-color
              bg-primary-color 
              mt-3
              text-white
              block
              text-center
              p-3
              px-4
              text-sm
              rounded
              cursor-pointer
              font-bold
            "
          >
            SignUp
          </span>
        </div>
      </div>
    </div>
    <!--  -->
     
    <!--  -->
    <div class="" v-if="showAlert">
        <SignUpAlert  @hideAlert="hideAlert" :showAlert="showAlert" :alertCode="alertCode"  :alertMgs="alertMgs"></SignUpAlert>
    </div>   
   
  </div>
</template>
<script>
 import CustomSelect from "./essentials/CustomSelect.vue";
import TextInput from "./essentials/TextInput.vue";
import axios from "axios";
import SignUpAlert from "./SignUpAlert.vue";
import validator, {isEmpty, DELIVERY_CUSTOMER_TYPE, DILIVERY_METHOD, SERVICE_TYPE, DELIVERY_TYPE} from "../api/validator.js";

export default {
    components:{SignUpAlert,TextInput,CustomSelect},
  data() {
    return {
      role:[{value:'ROLE_USER',label:'User'},{value:'ROLE_DRIVER',label:'Driver'}],
      userFormInvalid:false,
        formErrorMap: new Map(),
        addressCode:"",
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
        role: "",      
      },
       showAlert: false,
        alertCode: "345",
        alertMgs: "",
        showPassword:true
    };
  },
  methods: {
     toggleShow() {
      this.showPassword = !this.showPassword;
    },
    signUp(){
      
      if (this.userFormInvalid) {
        this.createUser()
      }
      else{
        
        this.$store.commit("showAllErrorsInForm");
      }
    },
     valid() { },
     isLetter(e) {
            if (/^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(e.key)) {
              e.preventDefault();
            } else {
              return true;
            }
        },
            validate() {
            let validatorMap = validator.validateCourier(this.user, "SIGNUP");
            if(this.$store.state.forceShowErrors)
              this.formErrorMap = validatorMap;
            return validatorMap;
        },
    hideAlert(event){
        this.showAlert = event;
    },
    createUser() {
      const path = "/api/auth/signup";
      axios
        .post(path, this.user, { withCredentials: true })
        .then((res) => {
            this.showAlert = true
              this.alertMgs = res.data;
          this.alertCode = res.status;
       
          console.log("res", res);
          
        //   this.$router.push({ name: "login" });
        })
        .catch((error) => {
             this.showAlert = true
          console.log("error", "error");
          console.log("error", error.response);
          this.alertMgs = error.response.data;
          this.alertCode = error.response.status;
          console.log("error", this.alertCode,this.alertMgs);
         
        });
    },
  },
      watch: {
      user: {
        handler: function (newData, oldData) {
          let errors = this.validate();
          this.formErrorMap = errors;
           if(this.formErrorMap.size == 0)
      this.userFormInvalid = true;
     else this.userFormInvalid = false;
    
          if (errors.size == 0) {
            this.$emit("senderFormData", this.user);
          }
        },
        deep: true,
      },
      },
      mounted() {
        this.validate()
      },
};
</script>
<style lang="scss"></style>
