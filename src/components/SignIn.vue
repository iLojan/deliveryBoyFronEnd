<template >
    <div>
        <div class="login_form  mb-5  p-10 pt-5  mx-auto flex rounded" style="width: 500px;">
            <div class="sec flex-1">
                <img class="mb-3 mx-auto" style="height: 150px;" src="../assets/img/login.svg" alt="">
                <span class="flex shadow-md mb-5 text-xs">
                    <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Email</span>
                    <input  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="loginData.usernameOrEmail" type="text" placeholder="Enter Your Email">
                </span>
                <span class="flex shadow-md mb-5 text-xs">
                    <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Password</span>
                    <input class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="loginData.password" type="password" placeholder="Enter Your Password">
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
            loginData:{
               
            }
        }
    },
    methods: {
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
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('role', res.data.roles);
                this.$store.dispatch("loginStatus", localStorage.getItem('email'))
                this.$router.push({name:"index"})
               
                console.log("setAccessToken",res)
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