<template>
  <div >
    <div class="map" id="googleMap"></div>
 
  </div>
   
  </template>
  
  <script>
  export default {
    name: "Map",
    props: {
      center: { lat: Number, lng: Number },
      zoom: Number,
      mapType: String,
      disableUI: Boolean,
      originLat:Number,
      originLng:Number,
      
    },
    data() {
        return {
            map:null,
            mapCenter:{lat:7.6942845,lng:81.6977323},
            output:"",
            myLatlng:{},
            originLatitude:7.7046699,
            originLongitude:81.7166666,
            
        }
    },
    computed:{
    gerMergeArray(){
      
            return this.$store.getters.getLatLng
      }
    },
    watch: {
      gerMergeArray:{
        deep: true,
        handler(latLng) {
          this.initMap()
        console.log("Oh, look, a new color!", latLng);
        if(latLng.destinationLatitude){
          this.pickUpLocation()
        }
      }
      }
    },
    methods: {
     
      passData(distance){
        this.$emit('distance', distance)
      },
      converKM(data) {
        let str = data;
        str = str.substring(0, str.length - 3)
        var km = str * 1.60934;
        return km.toFixed(2)
      },
  
      pickUpLocation() {
        // var rendererOptions = {
        //             map: this.map,
        //             suppressMarkers: true,
        //             preserveViewport: true
        //         }
        //create a DirectionsService object to use the route method and get a result for our request
        var directionsService = new window.google.maps.DirectionsService();

        //create a DirectionsRenderer object which we will use to display the route
        var directionsDisplay = new window.google.maps.DirectionsRenderer();

        //bind the DirectionsRenderer to the map
        directionsDisplay.setMap(this.map);


        var request = {

          origin: new window.google.maps.LatLng(this.gerMergeArray.originLatitude, this.gerMergeArray.originLongitude),
          destination: new window.google.maps.LatLng(this.gerMergeArray.destinationLatitude, this.gerMergeArray.destinationLongitude),
          travelMode: window.google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
          unitSystem: window.google.maps.UnitSystem.IMPERIAL
        }
        var output = document.getElementById('outputDiv')
        const _self = this
        //pass the request to the route method
        directionsService.route(request, function (result, status) {
          console.log("result, status", result);
     
          if (status == window.google.maps.DirectionsStatus.OK) {

            //Get distance and time
           
              
              let distance ={
                distance:_self.converKM(result.routes[0].legs[0].distance.text) ,
                duration:result.routes[0].legs[0].duration.text
              } 
              _self.passData(distance);
         
            console.log("output if", output);
            //display route
            directionsDisplay.setDirections(result);
           
          } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            this.map.setCenter(this.myLatLng);
          
            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
          }
        });

        console.log("this.output", output);
      },
      initMap() {
        
        console.log("this.originLat, this.originLng",this.gerMergeArray);
        this.myLatLng = { lat: this.gerMergeArray.originLatitude, lng: this.gerMergeArray.originLongitude };
        var mapOptions = {
          center: this.myLatLng,
          zoom: 15,
          draggable: true,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP

        };

        //create map
        this.map = new window.google.maps.Map(document.getElementById('googleMap'), mapOptions);
           new window.google.maps.Marker({
             map:this.map,
             position:this.myLatLng
           })
      

      },

      
    },
    mounted() {
      
 this.initMap();


    }

  };
  </script>
  
  <style lang="css" scoped>
  .map {
    width: 100%;
    height: 500px;
    background-color: azure;
  }
  </style>