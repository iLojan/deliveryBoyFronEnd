<template>
    <div>
      <div class="bg-gray-200 p-3 text-right font-semibold rounded-lg">My rating : {{ratingCal}}</div>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
              
               

             
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
                   User  Id
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Commentscc
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-50 border-b" v-for="(driver,index) in driverList.driverRatings" :key="index">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">
                  {{driver?.userId}}
                </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                 {{driver?.rating}}
                </td>
                <td class="text-sm text-gray-900 font-light px-2 w-40 py-4">
                {{driver?.comments}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
      return {
        ratingLists:'',
        driverList:"",
        ratingCal:""
      }
    },
    methods: {
     getDriverById() {
      let id = localStorage.getItem('id')
      let commonPath = process.env.VUE_APP_SERVER;
      let path = "/api/auth/getUserById/" + id;
      axios.get(commonPath + path, { withCredentials: true }).then((res) => {
        this.driverList = res.data;
        this.showRating()
        console.log("driver",this.driverList);
      });
    },
     showRating() {
      console.log("ratingList", this.driverList.driverRatings);
    let total =0,totalRating;
      if (this.driverList.driverRatings.length > 0) {
        console.log("this.driverList.driverRatings",this.driverList.driverRatings.length);
        for (let index = 0; index < this.driverList.driverRatings.length; index++) {
                     total += this.driverList.driverRatings[index].rating;
        }
        // this.driverRatings.forEach((rate) => {
        //   total += rate.rating;
        // });
        totalRating = (total / this.driverList.driverRatings.length).toFixed(1);
        this.ratingCal = totalRating +"("+this.driverList.driverRatings.length +")"
      }
    },
    },
    mounted() {
      this.getDriverById();
    },
}
</script>
<style>
    
</style>