<template>
  <div>
    <div class="grid grid-cols-12 mb-3 gap-3 w-full">
      <div class="col-span-5">
        <div class="">
          <label class="mb-2">Firs Name</label>
          <input
            type="text"
            class="input border py-2 w-full mb-3"
            placeholder="Origin"
            v-model="profile.fistName"
          />
        </div>
      </div>
      <div class="col-span-5">
        <div class="">
          <label class="mb-2">Last Name</label>
          <input
            type="text"
            class="input border py-2 w-full mb-3"
            placeholder="Last Name"
          v-model="profile.lastName"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 mb-3 gap-3 w-full">
      <div class="col-span-5">
        <div class="">
          <label class="mb-2">Phone</label>
          <input
            type="text"
            class="input border py-2 w-full mb-3"
            placeholder="Origin"
            v-model="profile.phoneNumber"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 mb-3 gap-3 w-full">
      <div class="col-span-12">
        <div class="">
          <label class="mb-2">Address line1</label>
          <input
            type="text"
            class="input border py-2 w-full mb-3"
            placeholder="Origin"
            v-model="profile.address"
          />
        </div>
      </div>
      <!-- <div class="col-span-12">
                <div class="">
                    <label class="mb-2">Address line1</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div> -->
      <div class="col-span-4">
        <div class="">
          <label class="mb-2">City</label>
          <input
            type="text"
            class="input border py-2 w-full mb-3"
            placeholder="Origin"
            ref="origin"
            v-model="profile.city"
          />
        </div>
      </div>
     
      <div class="col-span-4">
        <div class="">
          <label class="mb-2">Country</label>
          <input
            type="text"
            class="input border py-2 w-full mb-3"
            placeholder="Country"
           v-model="profile.country"
          />
        </div>
      </div>
    </div>
    <button
      class="my-3 border py-3  px-12 rounded bg-primary-color text-white"
      @click="updateProfile()"
    >
      Save
    </button>
      <div class="" v-if="showAlert">
      <AlertPopup @hidenPopup="hidenPopup" alertMgs="Profile update Successfully" alertTitle="Success" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      profile: "",
      showAlert:"",
    };
  },
  methods: {
    hidenPopup(event){
      this.showAlert = event;
      this.updateProfile()
    },
    getProfileById() {
      let id = localStorage.getItem("id");
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/auth/getUserById/" + id;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.profile = res.data;
        console.log("driver", this.profile);
      });
    },
     updateProfile(){
  let commonPath = process.env.VUE_APP_SERVER
  console.log("this.driver",this.profile);
       let path = "/api/auth/putUser";
       let profile = {user:this.profile}
      axios.post(commonPath+path,profile, { withCredentials: true }).then((res) => {
            console.log(res);
      });
    },
  },
 
  mounted() {
    this.getProfileById()
  },
};
</script>
<style></style>
