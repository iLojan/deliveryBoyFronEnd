<template >
<div class="fixed right-3 top-28" v-if="showValidAlert">
      <div class="alert  bg-red-200 text-red-800 p-3 rounded-lg border font-semibold border-red-600 py-28">Please enter the details</div>
    </div>
    <div class="mb-24 p-10 pt-5 mx-auto flex rounded w-4/12">
        <div class="sec flex-1">
                <img class="mb-3 mx-auto" style="height: 150px;" src="../assets/img/login.svg" alt="">
            <div class="mb-3">  
                <TextInput v-model:userInput="loginData.usernameOrEmail" inputType="text" :isLetter="valid" label="Email"
                :error="formErrorMap.has('usernameOrEmail')? formErrorMap.get('usernameOrEmail') : null"></TextInput>
            
          </div>
             <div class="mb-3 relative">  
                <TextInput v-model:userInput="loginData.password" :inputType="showPassword?'password':'text'" :isLetter="valid" label="Password"
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
                  <span @click="signIn()" class="border-2 border-primary-color bg-primary-color text-gray-100 mt-3  block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">
                    Login
                </span>
                <span class="pt-1">Don’t have an account? <router-link class="text-primary-color" to="signUp">sign up</router-link></span>
           </div>
        </div>


    </div>
</template>
<script>
    import axios from 'axios';
    import validator, {isEmpty, DELIVERY_CUSTOMER_TYPE, DILIVERY_METHOD, SERVICE_TYPE, DELIVERY_TYPE} from "../api/validator.js";
import TextInput from "./essentials/TextInput.vue";
export default {
    components:{TextInput},
    data() {
        return {
        userFormInvalid:false,
        showValidAlert:false,
        formErrorMap: new Map(),
        showPassword: true,
        password: null,
        loginData:{
              usernameOrEmail:"",
              password:"" 
            }
        }
    },
    methods: {
        toggleShow() {
      this.showPassword = !this.showPassword;
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
            let validatorMap = validator.validateCourier(this.loginData, "LOGIN");
            if(this.$store.state.forceShowErrors)
              this.formErrorMap = validatorMap;
            return validatorMap;
        },
        signIn(){
      
      if (this.userFormInvalid) {
        this.login()
      }
      else{
         this.showValidAlert = true;
        setTimeout(() => {
          this.showValidAlert = false;
        }, 3500);
        this.$store.commit("showAllErrorsInForm");
      }
    },
        login(){
            console.log("logindata",this.loginData);
            const path = "/api/auth/signin";
             axios.post(path,this.loginData,{ withCredentials: true })
            .then(res => {
                console.log("setAccessToken",res.data)
                this.getUserDetails(res.data)
                this.$emit('update-cart', true)
            })
            .catch(error => {
                console.log("updateAccessTokenStatus", error)
            })
        },
        getUserDetails(email){
            console.log("logindata",this.loginData);
            
      let commonPath = process.env.VUE_APP_SERVER
            const path = "/api/auth/getUser/"+email;
             axios.get(commonPath+path,{ withCredentials: true })
            .then(res => {
                this.$store.state.userName = res.data.username
                this.$store.state.userRole = res.data.roles
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('role', res.data.roles);
                this.$store.dispatch("loginStatus", localStorage.getItem('email'))
                if (res.data.roles ==="ROLE_DRIVER") {
                    this.$router.push({name:"DriverManageAccount"})
                }
                else{
                    this.$router.push({name:"index"})
                }
                console.log("setAccessToken",res.data.roles)
                
               
                
            })
            .catch(error => {
                console.log("updateAccessTokenStatus", error)
            })
        }
    },
     watch: {
      loginData: {
        handler: function (newData, oldData) {
          let errors = this.validate();
          this.formErrorMap = errors;
           if(this.formErrorMap.size == 0)
      this.userFormInvalid = true;
     else this.userFormInvalid = false;
    
        },
        deep: true,
      },
      },
}
</script>
<style lang="scss">
    
</style>