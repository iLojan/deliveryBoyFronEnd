<template>
    <div>
        <div class="mb-24  p-10 pt-5  mx-auto flex rounded" style="width: 500px;">
          <div class="">
              <h1 class="text-h2-font text-center mb-6">Sign up</h1>
            <span class="flex shadow-md mb-3 text-xs">
                <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Name</span>
                <input class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="data.name" type="text" placeholder="">
            </span>

            <span class="flex shadow-md mb-3 text-xs">
                <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">username</span>
                <input class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="data.username" type="text" placeholder="">
            </span>
            <span class="flex shadow-md mb-3 text-xs">
                <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">email</span>
                <input class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" type="text" v-model="data.email" placeholder="">
            </span>
            <span class="flex shadow-md mb-3 text-xs">
                <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">password</span>
                <input class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" type="password" v-model="data.password" placeholder="">
            </span>
            <span class="flex shadow-md mb-3 text-xs">
                <span class="bg-primary-color w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Role</span>
                <select  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" v-model="data.role" name="" id="">
                    <option value="ROLE_USER">User</option>
                    <option value="ROLE_DRIVER">Driver</option>
                </select>
             </span>
         
            
      
            <div class="col-span-1 mb-2">
                <span @click="signUp" class="border-2 border-primary-color hover:bg-primary-color hover:text-gray-100 mt-3 text-primary-color block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">
                    Login
                </span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    data() {
        return {
            data: {
                name: "",
                username: "",
                email: "",
                password: "",
                role: ""
            }
        }
    },
    methods: {
        signUp(){
            const path = "/api/auth/signup";
             axios.post(path,this.data,{ withCredentials: true })
            .then(res => {
                this.$router.push({name:'login'})
              console.log("res",res);
            })
            .catch(error => {
              console.log("error",error);
            })
        }
    },
}
</script>
<style lang="scss">
    
</style>