<template lang="">
    <div>
        <div class="md:px-8  lg:w-8/12 md:10/12 w-full md:m-auto  md:p-0 p-3 md:mt-6">
            <div class="main">
                <div class="mt-10">
                    <div class="flex mb-3 border-b">
                        <div class="w-36px px-4 py-2 font-medium text-lg" :class="tab === 'pending'?'active':''" @click="tabClick('pending')">Pending</div>
                        <div class="w-36px px-4 py-2 font-medium text-lg " :class="tab === 'active'?'active':''" @click="tabClick('active')">Active</div>
                    </div>
                <div class="mt-10">
                    <Pending v-if="tab ==='pending'"></Pending>
                    <Active v-if="tab ==='active'"></Active>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Pending from './Pending.vue'
    import Active from './Active.vue'
export default {
    components:{Pending,Active},
    data() {
        return {
            tab:'pending'
        }
    },
    methods: {
        tabClick(data){
            this.tab =data
        }
    },
    
}
</script>
<style lang="">
    
</style>