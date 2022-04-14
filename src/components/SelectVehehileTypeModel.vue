<template>
    <div>
      <div class="flex justify-center">
          <div class="py-3 px-4 border rounded-lg text-center mr-2" @click="selectVehile('small',price('small'))">
            <span class="font-semibold">Small</span>   
              <label class="text-primary-color block">{{price("small")}}</label>
          </div>
          <div class="py-3 px-4 border rounded-lg text-center mr-2"  @click="selectVehile('medium',price('medium'))">
            <span class="font-semibold">medium</span>   
              <label class="text-primary-color block">{{price("medium")}}</label>
        </div>
          <div class="py-3 px-4 border rounded-lg text-center mr-2"  @click="selectVehile('large',price('large'))">
            <span class="font-semibold">large</span>   
              <label class="text-primary-color block">{{price("large")}}</label>
        </div>
     
      </div>
    </div>
</template>
<script>
export default {
    props:['setDistance'],
    data() {
        return {
           
        }
    },
    methods: {
        price(type){
            let totalPrice;
            if (type === 'small') {
                totalPrice =this.setDistance.distance * 100
            } else if (type === 'medium') {
                totalPrice = this.setDistance.distance * 200
            }
            else if (type === 'large') {
                totalPrice = this.setDistance.distance * 400
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
        this.smallPrice = this.setDistance.distance * 100;
        this.medimPrice = this.setDistance.distance * 200;
        this.largePrice = this.setDistance.distance * 400;
    },
}
</script>
<style lang="">
    
</style>