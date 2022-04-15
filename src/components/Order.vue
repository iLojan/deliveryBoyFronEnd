<template>
  <div class="md:px-8  lg:w-10/12 md:10/12 w-full md:m-auto  md:p-0 p-3 md:mt-20">
    <div class="main">
      
      <div class="grid grid-cols-12 gap-4 px-3">
        <div class="col-span-4 left-grid scrollbar pr-3" id="style-2">
          <div class="searchCity">
            <div class="">
              <label>From</label>
              <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
            </div>
            <div class="">
              <label for="">To</label>
              <input type="text" class="input border py-2 w-full mb-3 "  placeholder="Destination" ref="destination" />
            </div>


            <button class="mb-3 border-2 py-2 w-full px-3 rounded border-primary-color font-medium text-primary-color"
              @click="pickUpLocation()">PickUp Location</button>
              <button class="mb-3 border-2 py-2 w-full px-3 rounded border- font-medium "
            data-bs-toggle="modal" data-bs-target="#exampleModalLg"> 
            <span v-if="order.price">total is {{order.price}} LKR</span>
            <span v-else>Select Vehile type</span>
            </button>
          </div>
         
          <div class="" v-if="order.price">
            
          <div class="">
            
            <div class="">
              <label>Select a ride </label>
             
              <select name="" class="input border py-2 w-full mb-3" id="">
                <option  v-for="(item, index) in driverList"  :key="index" :value="item.id">
                  {{item.username}}
                </option>
              </select>
            </div>
          </div>
            <div class="enter Details">
              <div class="">
                <label>Enter type of the material</label>
                <input v-model="order.material" type="text" class="input border py-2 w-full mb-3" />
              </div>
              <div class="">
                <label for="">Enter approx weight in KG</label>
                <input type="text" v-model="order.weight" class="input border py-2 w-full mb-3 " />
              </div>
              <div class="">
                <label for="">Enter additional information</label>
                <textarea v-model="order.information" class="input border py-2 w-full mb-3 " cols="30" rows="10"></textarea>
                <input type="text" class="input border border-primary-color py-2 w-full mb-3 " />
              </div>
            
            
              <button class="mb-3 border   py-2 w-full px-3 rounded bg-primary-color text-white "
                @click="orderNow()">Order Now</button>
            </div>
          </div>
           
        </div>
        <div class="col-span-8">
          <Map :disableUI="false" :zoom="12" mapType="hybrid" @distance="distance" :center="{ lat: 38.8977859, lng: -77.0057621 }"
            :originLat="originLat" :originLng="originLng" :destinationLat="destinationLat"
            :destinationLng="destinationLng"></Map>
        </div>
      </div>

      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLgLabel">
            
                Select Vehehile Type
               
              </h5>
              <button type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body relative p-4">
              
              <SelectVehehileTypeModel @selectedVehile="selectVehile" :setDistance="setDistance"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Map from "./Map.vue"
  import axios from 'axios'
  import SelectVehehileTypeModel from './SelectVehehileTypeModel.vue'
  export default {
    components: { Map,SelectVehehileTypeModel },
    data() {
      return {
        originLat: 8.5832926,
        originLng: 81.1781113,
        destinationLat: '',
        destinationLng: '',
        showSelectVehehileType:false,
        setDistance:'',
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
          { lant: 7.7053815, lng: 81.7141455 }
        ],
        order: {
          material: "",
          weight: 0,
          price: 0,
          duration: "",
          information: "",
          status: "",
          fromLocation: "",
          toLocation: "",
          sendUser: null,
          userDetails: null
        },
        driverList:''
      }
    },
    computed: {
      gerMergeArray() {
        return this.$store.getters.getLatLng
      }
    },
    methods: {
      selectVehile(e){
        this.order.price = e.price;
          console.log("event price",e);
      },
      selectVehehileType(){
        this.showSelectVehehileType = true;
      },
      distance(event){
        this.setDistance = event;
        this.order.duration = event.duration
      console.log("getDistance",event);
      },
      test() {
        this.$store.dispatch("setDynamicLoop", this.testPosition);
      },
      dispatchLatLngdata() {

      },
      orderNow(){
        console.log("orderNow",this.order);
        const path = "api/v1/addOrder";
             axios.post(path,this.order,{ withCredentials: true })
            .then(res => {
                console.log("addOrder",res);
               
            })
            .catch(error => {
                console.log("updateAccessTokenStatus", error)
            })
      },
      getAllDriver(){
        
        const path = "api/auth/getAllUser";
             axios.get(path,{ withCredentials: true })
            .then(res => {
                this.driverList =   res.data.filter(item => item.roles[0].name === "ROLE_DRIVER");
               
            })
            .catch(error => {
                console.log("updateAccessTokenStatus", error)
            })
      },
      getAddressFrom(latLng) {
        console.log("latLng", latLng);
        axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latLng.originLatitude + "," + latLng.originLongitude + "&key=AIzaSyCJOePtL2XYo9jZ0ShzYE7zvYQFZGYJ99w")
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log("error", error);
          })
      },
      pickUpLocation() {

        this.latLng.originLatitude = this.originLat,
          this.latLng.originLongitude = this.originLng,
          this.latLng.destinationLongitude = this.destinationLng,
          this.latLng.destinationLatitude = this.destinationLat,

          console.log("data", this.latLng);

        this.$store.dispatch('setLatAndLng', this.latLng)
      },
      locatorButtonPressed() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            console.log("position", position.coords.latitude);
            this.originLat = position.coords.latitude
            this.originLng = position.coords.longitude;

            this.latLng.originLatitude = this.originLat,
              this.latLng.originLongitude = this.originLng,
              this.getAddressFrom(this.latLng)
            this.$store.dispatch('setLatAndLng', this.latLng)

          },
            error => {
              console.log("error", error.message);
            }

          )
        }
        else {
          console.log("your browser does not suppors");
        }
      },
      autocompleteInit() {
        let autocompleteLatlng = new window.google.maps.LatLng(7.7341896, 81.6433892);

        var acOptions = {
          location: autocompleteLatlng,
          radius: 150000,  // (in meters; this is 150Km)
          types: ['address'],
          componentRestrictions: { country: 'lk' }
        };
        const originAutocomplete = new window.window.google.maps.places.Autocomplete(this.$refs["origin"], acOptions);
        originAutocomplete.addListener("place_changed", () => {
          console.log("place.geometry",this.$refs["origin"]);
          const place = originAutocomplete.getPlace();
          this.originLat = place.geometry.location.lat()
          this.originLng = place.geometry.location.lng()
          this.order.fromLocation = place.formatted_address
          console.log("place", place.formatted_address);
        })

        const destinationAutocomplete = new window.window.google.maps.places.Autocomplete(this.$refs["destination"], acOptions);
        destinationAutocomplete.addListener("place_changed", () => {
        
          const place = destinationAutocomplete.getPlace();
          this.destinationLat = place.geometry.location.lat()
          this.destinationLng = place.geometry.location.lng()
          this.order.toLocation = place.formatted_address
          console.log("place", place.geometry.location.lat(), place.geometry.location.lng(), place);
        })
      },
    },
    mounted() {
      this.getAllDriver();
      this.locatorButtonPressed();
      this.autocompleteInit();
    },
  }
</script>
<style>
  .left-grid {
    height: 600px;
    overflow: auto;
  }

  .scrollbar #style-2::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
    margin-left: 10px;
  }

  #style-2::-webkit-scrollbar {
    width: 5px;

    background-color: #c7eef7;
  }

  #style-2::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #7aafb6;
  }
</style>