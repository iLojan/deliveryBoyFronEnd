<template >
    <div>
        <div class="grid grid-cols-12 gap-3 w-full">
            <div class="col-span-5">
                <div class="">
                    <label >Enter type of the material</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
            <div class="col-span-5">
                <div class="">
                    <label >Enter type of the material</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-3 w-full">
            <div class="col-span-5">
                <div class="">
                    <label >Email</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
            <div class="col-span-5">
                <div class="">
                    <label >Phone</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-3 w-full">
            <div class="col-span-12">
                <div class="">
                    <label >Address line1</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
            <div class="col-span-12">
                <div class="">
                    <label >Address line1</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
            <div class="col-span-4">
                <div class="">
                    <label >City</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
            <div class="col-span-4">
                <div class="">
                    <label >Postel code</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
            <div class="col-span-4">
                <div class="">
                    <label >Country</label>
                    <input type="text" class="input border py-2 w-full mb-3" placeholder="Origin" ref="origin" />
                  </div>
            </div>
           
        </div>
        <button class="my-3 border   py-2 w-full px-6 rounded bg-primary-color text-white " @click="pickUpLocation()">Save</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>