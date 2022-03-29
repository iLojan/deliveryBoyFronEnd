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
              <input type="text" class="input border py-2 w-full mb-3 " placeholder="Destination" ref="destination" />
            </div>


            <button class="mb-3 border-2 py-2 w-full px-3 rounded border-primary-color font-medium text-primary-color"
              @click="pickUpLocation()">PickUp Location</button>
          </div>
          <div class="">
            <div class="">
              <label>Select Vehile type </label>
              <select name="" class="input border py-2 w-full mb-3" id="">
                <option value="">
                  Select Vehile type
                </option>
              </select>
            </div>
            <div class="">
              <label>Select a ride </label>
              <select name="" class="input border py-2 w-full mb-3" id="">
                <option value="">
                  Select Vehile type
                </option>
              </select>
            </div>
          </div>
          <div class="enter Details">
            <div class="">
              <label>Enter type of the material</label>
              <input type="text" class="input border py-2 w-full mb-3" />
            </div>
            <div class="">
              <label for="">Enter approx weight in KG</label>
              <input type="text" class="input border py-2 w-full mb-3 " />
            </div>
            <div class="">
              <label for="">Enter additional information</label>
              <textarea class="input border py-2 w-full mb-3 " cols="30" rows="10"></textarea>
              <input type="text" class="input border border-primary-color py-2 w-full mb-3 " />
            </div>


            <button class="mb-3 border   py-2 w-full px-3 rounded bg-primary-color text-white "
              @click="pickUpLocation()">Done</button>
          </div>
        </div>
        <div class="col-span-8">
          <Map :disableUI="false" :zoom="12" mapType="hybrid" :center="{ lat: 38.8977859, lng: -77.0057621 }"
            :originLat="originLat" :originLng="originLng" :destinationLat="destinationLat"
            :destinationLng="destinationLng"></Map>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import Map from "./Map.vue"
  import axios from 'axios'
  export default {
    components: { Map },
    data() {
      return {
        originLat: 8.5832926,
        originLng: 81.1781113,
        destinationLat: '',
        destinationLng: '',
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
        ]
      }
    },
    computed: {
      gerMergeArray() {

        return this.$store.getters.getLatLng
      }
    },
    methods: {
      test() {
        this.$store.dispatch("setDynamicLoop", this.testPosition);
      },
      dispatchLatLngdata() {

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
          const place = originAutocomplete.getPlace();
          this.originLat = place.geometry.location.lat()
          this.originLng = place.geometry.location.lng()
          console.log("place", place.geometry.location.lat(), place.geometry.location.lng(), place);
        })

        const destinationAutocomplete = new window.window.google.maps.places.Autocomplete(this.$refs["destination"], acOptions);
        destinationAutocomplete.addListener("place_changed", () => {
          const place = destinationAutocomplete.getPlace();
          this.destinationLat = place.geometry.location.lat()
          this.destinationLng = place.geometry.location.lng()
          console.log("place", place.geometry.location.lat(), place.geometry.location.lng(), place);
        })
      },
    },
    mounted() {
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