<template>
  <div class="md:px-8 lg:w-10/12 md:10/12 w-full md:m-auto md:p-0 p-3 md:mt-20">
    <div
      v-if="showAler"
      class="
        bg-green-100
        rounded-lg
        py-4
        border
        px-6
        mb-4
        text-base text-green-700
        absolute
        w-2/5
        right-0
        z-40
      "
      role="alert"
    >
      Your successed
    </div>
    <div class="main">
      <!-- Main section -->
      <div class="grid grid-cols-12 gap-4 px-3" v-if="!showDriverDiv">
        <div class="col-span-4 left-grid scrollbar pr-3" id="style-2">
          <div class="searchCity">
            <div class="">
              <label>From</label>
              <input
                type="text"
                class="input border py-2 w-full mb-3"
                placeholder="Origin"
                ref="origin"
              />
            </div>
            <div class="">
              <label for="">To</label>
              <input
                type="text"
                class="input border py-2 w-full mb-3"
                placeholder="Destination"
                ref="destination"
              />
            </div>
            <button
              class="
                mb-3
                border-2
                py-2
                w-full
                px-3
                rounded
                bg-primary-color
                font-medium
                text-white
              "
              @click="pickUpLocation()"
            >
              PickUp Location
            </button>
            <!--  -->
            <div class="" v-if="setDistance">
              <div class="">
                <label>Select type of the material</label>
                <select
                  v-model="order.material"
                  name=""
                  class="input border py-2 w-full mb-3"
                  id=""
                >
                  <option value="Documents">Documents</option>
                  <option value="Parcel">Parcel</option>
                </select>
              </div>
              <div class="">
                <label for="">Enter approx weight in KG</label>
                <select
                  v-model="order.weight"
                  name=""
                  class="input border py-3 w-full mb-3"
                  id=""
                >
                  <option value="1">0-1</option>
                  <option value="3">1-3</option>
                  <option value="5">3-5</option>
                  <option value="10">5-10</option>
                </select>
              </div>
              <button
                class="
                  mb-3
                  border
                  text-h2-font
                  py-3
                  w-full
                  px-3
                  rounded
                  font-medium
                  text-
                "
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLg"
              >
                <span v-if="order.standardPrice"
                  >Total is <b>{{ order.standardPrice }} LKR</b>
                </span>

                <span v-else>Select delivery type</span>
              </button>
            </div>
            <!--  -->
          </div>

          <div class="" v-if="order.standardPrice">
            <div class="">
              <div class="">
                <label>Receiver name</label>
                <input
                  v-model="order.receiverName"
                  type="text"
                  class="input border py-2 w-full mb-3"
                />
              </div>
              <div class="">
                <label>Receiver phone number</label>
                <input
                  v-model="order.receiverEmail"
                  type="text"
                  class="input border py-2 w-full mb-3"
                />
              </div>
              <div class="">
                <label>Receiver e-mail</label>
                <input
                  v-model="order.receiverPhoneNumber"
                  type="text"
                  class="input border py-2 w-full mb-3"
                />
              </div>
            </div>
            <div class="enter Details">
              <div class="">
                <label for="">Enter additional information</label>
                <textarea
                  v-model="order.information"
                  class="input border py-2 w-full mb-3"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <button
                class="
                  mb-3
                  border
                  py-2
                  w-full
                  px-3
                  rounded
                  bg-primary-color
                  text-white
                "
                @click="next()"
              >
                Next
              </button>
              <!-- <button class="mb-3 border   py-2 w-full px-3 rounded bg-primary-color text-white "
                @click="updateOrder()">Send now </button> -->
            </div>
          </div>
        </div>
        <div class="col-span-8">
          <Map
            :disableUI="false"
            :zoom="12"
            mapType="hybrid"
            @distance="distance"
            :center="{ lat: 38.8977859, lng: -77.0057621 }"
            :originLat="originLat"
            :originLng="originLng"
            :destinationLat="destinationLat"
            :destinationLng="destinationLng"
          ></Map>
        </div>
      </div>
      <!-- end -->
      <!-- DriverDiv  -->
      <div v-if="showDriverDiv">
      <div class="bg-white  rounded-lg py-4 px-3 w-4/5 m-auto">
       <div class="" >
        <label for="" class="font-medium text-h2-font mb-4 mt-2"
          >Select Driver</label
        >
        <div class="flex items-center">
          <div
            class="
              border
              flex
              rounded-md
              w-1/5
              h-36
              mr-2
              flex-col
              items-start
              p-3
             cursor-pointer
             hover:bg-gray-300
            "
            v-for="(item, index) in driverList"
            :key="index"
            :value="item.id"
            @click="setDrive(item)"
            :class="item.id === selectedUserId? 'bg-gray-600 text-white':'' "
          >
          <div class=" flex flex-col my-auto">
              <div class="mb-2">
             <label class="font-medium text-h2-font ">{{ item.name }}</label>
            <span class="font-normal text-sm text-secondary-font" v-if="item?.driverRatings.length > 0">rating is {{showRating(item?.driverRatings)}} ({{item?.driverRatings.length}})</span>
          </div>
          <label class="font-normal text-p2-font mb-2">
          standardPrice <strong>{{ order.standardPrice }}</strong> 
          </label>
            <label
              class="font-normal text-p2-font mb-2"
              v-if="item.driverPrices?.price && order.id === item.driverPrices.orderId">
              additional price <strong>{{ item.driverPrices?.price }}</strong> 
            </label>
            <label
              class="font-normal text-p2-font"
              v-if="item.driverPrices?.hour && order.id === item.driverPrices.orderId">
              hour <strong>{{ item.driverPrices?.hour }}</strong>
            </label>
          </div>
        
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-end">
         <button
                class="
                  mb-3
                  border
                  py-3
                  w-32
                  ml-auto
                  mt-3
                  px-4
                  rounded
                  bg-primary-color
                  text-white
                "
                @click="updateOrder(true)"
              >
                Order now
              </button>
      </div>
       
      </div>
     
      </div>
     

      <div
        class="
          modal
          fade
          fixed
          top-0
          left-0
          hidden
          w-full
          h-full
          outline-none
          overflow-x-hidden overflow-y-auto
        "
        id="exampleModalLg"
        tabindex="-1"
        aria-labelledby="exampleModalLgLabel"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
          <div
            class="
              modal-content
              border-none
              shadow-lg
              relative
              flex flex-col
              w-full
              pointer-events-auto
              bg-white bg-clip-padding
              rounded-md
              outline-none
              text-current
            "
          >
            <div
              class="
                modal-header
                flex flex-shrink-0
                items-center
                justify-between
                p-4
                border-b border-gray-200
                rounded-t-md
              "
            >
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLgLabel"
              >
                Select delivery type
              </h5>
              <button
                type="button"
                class="
                  btn-close
                  box-content
                  w-4
                  h-4
                  p-1
                  text-black
                  border-none
                  rounded-none
                  opacity-50
                  focus:shadow-none focus:outline-none focus:opacity-100
                  hover:text-black hover:opacity-75 hover:no-underline
                "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4">
              <SelectVehehileTypeModel
                @selectedVehile="selectVehile"
                :weight="order.weight"
                :material="order.material"
                :setDistance="setDistance"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div >
        <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" >
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" 
          enter="ease-out duration-300" 
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" 
          leave="ease-in duration-200" 
          leave-from="opacity-100 translate-y-0 sm:scale-100" 
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                 <div class="mt-3  sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"> 
                       <!-- {{
                      alertCode == 400
                        ? "Registration fail"
                        : "Registration successful"
                    }}
                     -->
                     success
                    </DialogTitle>
                 <div class="sm:flex sm:items-start mt-2 items-center">
            
                <div class="text-p1-font text-center sm:mt-0  sm:text-left">
                
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Order has been placed</p>
                  </div>
                </div>
              </div>
                  </div>
                </div>
              </div>
              <div class=" px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-green-500 text-white px-4 py-2 text-base font-medium  shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" 
                @click="hidden()"
                 ref="cancelButtonRef">Cancel</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
    </div>
  </div>
</template>

  <script>
import Map from "./Map.vue";
import axios from "axios";
import SelectVehehileTypeModel from "./SelectVehehileTypeModel.vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
export default {
  components: { Map, SelectVehehileTypeModel, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot },
  data() {
    return {
      originLat: 8.5832926,
      originLng: 81.1781113,
      showDriverDiv: false,
      destinationLat: "",
      destinationLng: "",
      showSelectVehehileType: false,
      setDistance: "",
      latLng: {
        originLatitude: null,
        originLongitude: null,
        destinationLongitude: null,
        destinationLatitude: null,
      },
      testPosition: [
        { lant: 7.7046699, lng: 81.7166666 },
        { lant: 7.7055431, lng: 81.7165866 },
        { lant: 7.705742, lng: 81.7158264 },
        { lant: 7.7053815, lng: 81.7141455 },
      ],
      order: {
        id:'',
        material: "Documents",
        weight: "1",
        total: 0,
        standardPrice:0,
        driverExtraPrice:0,
        duration: "",
        information: "",
        receiverName: "",
        receiverPhoneNumber: "",
        receiverEmail: "",
        status: "New",
        fromLocation: "",
        userId: "",
        driverId: "",
        toLocation: "",
        sendUser: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        userDetails: null,
        driverAdditionalCharge:'',
      },
      selectedUserId:0,
      showAler: false,
      driver:{
rating:""
      },      
driverList: "",
      rating:0,
      total:0,
      ratingCal:0,
      ratingList:[],
      open:false,
    };
  },
  computed: {
    gerMergeArray() {
      return this.$store.getters.getLatLng;
    },
  },
  methods: {
   
     hidden(){    
            this.open = false;
            this.$router.push({ name: "allRequest" });      
    },
    showRating(ratingList) {
      console.log("ratingList", ratingList);
    let ratingCal = 0,total =0;
      if (ratingList.length > 0) {
        console.log("ratingList",ratingList.length);
        for (let index = 0; index < ratingList.length; index++) {
                     total += ratingList[index].rating;
        }
        // ratingList.forEach((rate) => {
        //   total += rate.rating;
        // });
        ratingCal = (total / ratingList.length).toFixed(1);
      }
      return ratingCal;
    },
    setDriverIdToRating(id){
      // this.getRating(id);
    },
            getRating(id){                
                 let commonPath = process.env.VUE_APP_SERVER
                 let rating;
                const path = "/api/auth/getRating/"+id;
                axios.get(commonPath+path,{ withCredentials: true })
                .then(res => {
                  console.log("res.data.rating",res.data.length);
                    // this.rating = this.calculateRating(res.data) 
                    // this.ratingList.push({rating:this.rating,id:id})  
                    if(res.data.length > 0 ){
                      let arra=[];
                      
                    res.data.forEach(rate => { arra.push(rate.rating) });     
                  //  arra.reduce(function (curr, prev) { return curr + prev; })
    this.rating   = 10; 
                     console.log("rating",arra )
                    }
                    else{
                      this.rating = 0
                    }       
                })                
                return this.rating;
            },
            calculateRating(rating){
                // if(rating.length >0 ){
                //     rating.forEach(rate => { this.total += rate.rating });
                //     this.ratingCal = (this.total/rating.length).toFixed(1)
                // }
              return rating
            },

    setDrive(driver){
      this.selectedUserId = driver.id;
     this.order.driverId = driver.id;
     this.order.driverAdditionalCharge = driver.price;
     this.order.driverExtraPrice = driver.price;
     if(driver.driverPrices.price && this.order.id === driver.driverPrices.orderId){
   this.order.total = this.order.standardPrice + driver.driverPrices.price
     }
     else{
      this.order.total = this.order.standardPrice
     }
  
     console.log(driver,"this.order",this.order);
    },
    selectVehile(e) {
      this.order.standardPrice = e.price;
      console.log("event price", e);
      this.orderNow();
    },

    selectVehehileType() {
      this.showSelectVehehileType = true;
    },
    distance(event) {
      this.setDistance = event;
      this.order.duration = event.duration;
      console.log("getDistance", event);
    },
    test() {
      this.$store.dispatch("setDynamicLoop", this.testPosition);
    },
    dispatchLatLngdata() {},
    orderNow() {
      console.log("orderNow", this.order);
      const path = "api/v1/addOrder";
      axios
        .post(path, this.order, { withCredentials: true })
        .then((res) => {
          console.log(res);
          this.order.id = res.data.id
          // this.showAler = true;
        })
        .catch((error) => {
          console.log("updateAccessTokenStatus", error);
        });
    },
    next() {
      this.getAllDriver();
      this.updateOrder(true);
      // this.showDriverDiv = true;
    },
    updateOrder(status) {
      console.log("orderNow", this.order);
      const path = "api/v1/addOrder";
      axios
        .post(path, this.order, { withCredentials: true })
        .then((res) => {
          console.log(res);
          if(status){
             this.open = true;
          // this.$router.push("/user")
          }
         
        })
        .catch((error) => {
          console.log("updateAccessTokenStatus", error);
        });
    },
    getAllDriver() {
      const path = "api/auth/getUserByRole/ROLE_DRIVER";
      axios
        .get(path, { withCredentials: true })
        .then((res) => {
          this.driverList = res.data;
          // this.driverList = res.data.filter(
          //   (item) => item.roles === "ROLE_DRIVER"
          // );
        })
        .catch((error) => {
          console.log("updateAccessTokenStatus", error);
        });
    },
    getAddressFrom(latLng) {
      console.log("latLng", latLng);
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            latLng.originLatitude +
            "," +
            latLng.originLongitude +
            "&key=AIzaSyCJOePtL2XYo9jZ0ShzYE7zvYQFZGYJ99w"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    pickUpLocation() {
      (this.latLng.originLatitude = this.originLat),
        (this.latLng.originLongitude = this.originLng),
        (this.latLng.destinationLongitude = this.destinationLng),
        (this.latLng.destinationLatitude = this.destinationLat),
        console.log("data", this.latLng);

      this.$store.dispatch("setLatAndLng", this.latLng);
    },
    locatorButtonPressed() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("position", position.coords.latitude);
            this.originLat = position.coords.latitude;
            this.originLng = position.coords.longitude;

            (this.latLng.originLatitude = this.originLat),
              (this.latLng.originLongitude = this.originLng),
              this.getAddressFrom(this.latLng);
            this.$store.dispatch("setLatAndLng", this.latLng);
          },
          (error) => {
            console.log("error", error.message);
          }
        );
      } else {
        console.log("your browser does not suppors");
      }
    },
    autocompleteInit() {
      let autocompleteLatlng = new window.google.maps.LatLng(
        7.7341896,
        81.6433892
      );

      var acOptions = {
        location: autocompleteLatlng,
        radius: 150000, // (in meters; this is 150Km)
        types: ["address"],
        componentRestrictions: { country: "lk" },
      };
      const originAutocomplete =
        new window.window.google.maps.places.Autocomplete(
          this.$refs["origin"],
          acOptions
        );
      originAutocomplete.addListener("place_changed", () => {
        console.log("place.geometry", this.$refs["origin"]);
        const place = originAutocomplete.getPlace();
        this.originLat = place.geometry.location.lat();
        this.originLng = place.geometry.location.lng();
        this.order.fromLocation = place.formatted_address;
        console.log("place", place.formatted_address);
      });

      const destinationAutocomplete =
        new window.window.google.maps.places.Autocomplete(
          this.$refs["destination"],
          acOptions
        );
      destinationAutocomplete.addListener("place_changed", () => {
        const place = destinationAutocomplete.getPlace();
        this.destinationLat = place.geometry.location.lat();
        this.destinationLng = place.geometry.location.lng();
        this.order.toLocation = place.formatted_address;
        console.log(
          "place",
          place.geometry.location.lat(),
          place.geometry.location.lng(),
          place
        );
      });
    },
  },
  
  watch: {
      driverList: {
        handler: function (newData, oldData) {
          if(newData){
      newData.forEach(driver => {
        this.setDriverIdToRating(driver.id)
        console.log("driver",driver);
      });
          }
        },
        deep: true,
      },
  },
  mounted() {
    this.locatorButtonPressed();
    this.autocompleteInit();
    this.order.userId = localStorage.getItem("id");
  },
};
</script>
  <style>
.left-grid {
  height: 600px;
  overflow: auto;
}

.scrollbar #style-2::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
  margin-left: 10px;
}

#style-2::-webkit-scrollbar {
  width: 5px;

  background-color: #c7eef7;
}

#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #7aafb6;
}
</style>
