<template >
    <div>
        <div class="login_form  mb-5  p-10 pt-5  mx-auto flex rounded" style="width: 500px;">
            <div class="sec flex-1">
                <img class="mb-3 mx-auto" style="height: 150px;" src="../assets/img/login.svg" alt="">
                <span class="flex shadow-md mb-5 text-xs">
                    <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Email</span>
                    <input  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="loginData.usernameOrEmail" type="text" placeholder="Enter Your Email">
                </span>
                <span class="flex shadow-md mb-5 text-xs relative">
                    <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Password</span>
                    <input  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="loginData.password" 
                    :type="showPassword? 'password':'text'" placeholder="Enter Your Password">
                    <span @click="toggleShow"
                    class="cursor-pointer font-bold text-center text-primary-font rounded-l absolute right-2 top-3">
                        <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                                <!-- show -->
                        <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                </span>
                <!-- <a class="text-primary-color hover:underline font-bold text-xs ml-auto cursor-pointer">Forget Password ?</a> -->
                <span @click="login" class="border-2 border-primary-color hover:bg-primary-color hover:text-gray-100 mt-3 text-primary-color block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">
                    Login
                </span>
                <span class="pt-1">Don’t have an account? <router-link class="text-primary-color" to="signUp">sign up</router-link></span>
            </div>
              
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    data() {
        return {
        showPassword: true,
        password: null,
        loginData:{
               
            }
        }
    },
    methods: {
        toggleShow() {
      this.showPassword = !this.showPassword;
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
}
</script>
<style lang="scss">
    
</style>