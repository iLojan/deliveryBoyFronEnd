<template >
    <div>
        <div class="login_form mt-16 mb-5  p-10 pt-5  mx-auto flex rounded" style="width: 500px;">
            <div class="sec flex-1">
                <img class="mb-3 mx-auto" style="height: 150px;" src="../assets/img/login.svg" alt="">
                <span class="flex shadow-md mb-5 text-xs">
                    <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Email</span>
                    <input class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="loginData.userName" type="text" placeholder="someonespecial@example.com">
                </span>
                <span class="flex shadow-md mb-5 text-xs">
                    <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Password</span>
                    <input class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="loginData.password" type="password" placeholder="">
                </span>
                <!-- <a class="text-primary-color hover:underline font-bold text-xs ml-auto cursor-pointer">Forget Password ?</a> -->
                <span @click="login" class="border-2 border-primary-color hover:bg-primary-color hover:text-gray-100 mt-3 text-primary-color block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">
                    Login
                </span>
            </div>
        </div>
    </div>
</template>
<script>
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
            this.$store.dispatch("getAccessToken", this.loginData).then(() => {

            })
        }
    },
}
</script>
<style lang="scss">
    
</style>