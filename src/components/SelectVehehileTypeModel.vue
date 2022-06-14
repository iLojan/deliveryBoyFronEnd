<template>
        <div>
            <h3 class="text-h3-font block text-center mb-4">
                <div class="text-left w-72 m-auto">
                    <label class="block mb-1">Your totla distance is <strong>{{this.setDistance.distance}}</strong>  KM </label>
                   <label class="block mb-1"> You are material is <strong>{{material}}</strong></label>
                    <label class="block mb-1"> You are weight is <strong>{{weight}}</strong></label>
              
                </div>
           
            </h3>
            <div class="flex justify-center">

                <div class="py-3 px-4 border rounded-lg text-center mr-2 cursor-pointer"
                    @click="selectVehile('Normal',price('Normal'))">
                    <span class="font-semibold">Normal</span>
                    <label class="text-primary-color block mt-2"> {{price("Normal")}} LKR</label>
                </div>
                <div class="py-3 px-4 border rounded-lg text-center mr-2 cursor-pointer"
                    @click="selectVehile('SameDayCourier',price('SameDayCourier'))">
                    <span class="font-semibold">Same Day Courier</span>
                    <label class="text-primary-color block mt-2"> {{price("SameDayCourier")}} LKR</label>
                </div>
                <div class="py-3 px-4 border rounded-lg text-center mr-2 cursor-pointer"
                    @click="selectVehile('OvernightShipping',price('OvernightShipping'))">
                    <span class="font-semibold">Overnight Shipping</span>
                    <label class="text-primary-color block mt-2"> {{price("OvernightShipping")}} LKR</label>
                </div>

            </div>
        </div>
    </template>
    <script>
        export default {
    props:['setDistance','weight','material'],
    data() {
        return {
           wieghtAmount:0
        }
    },
    methods: {
        price(type) {
            if(this.weight === '1'){
                this.wieghtAmount = 0
            }
      else  if(this.weight === '3'){
                this.wieghtAmount = 50
            }
           else if(this.weight === '5'){
                this.wieghtAmount = 100
            }
            else if(this.weight === '10'){
                this.wieghtAmount = 150
            }
            let totalPrice;
            if (type === 'Normal') {
                totalPrice = Math.round((this.setDistance.distance * 2) + this.wieghtAmount)
            } else if (type === 'SameDayCourier') {
                totalPrice = Math.round((this.setDistance.distance * 3) + this.wieghtAmount)
            }
            else if (type === 'OvernightShipping') {
                totalPrice = Math.round((this.setDistance.distance * 5) + this.wieghtAmount)
            }
          
            return totalPrice
        },
       
        selectVehile(type,price){
            let priceObj = {
                type:type,
                price:price 
            }
            this.$emit("selectedVehile",priceObj)
console.log(type);
        }
    },
    mounted() {
      
        console.log("this.setDistance.distance",this.setDistance.distance);
        this.smallPrice = Math.round(this.setDistance.distance * 100);
        this.medimPrice = Math.round(this.setDistance.distance * 200);
        this.largePrice = Math.round(this.setDistance.distance * 400);
    },
}
    </script>
    <style lang="">

    </style>
