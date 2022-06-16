<template>

<div class="">
  <Header ></Header>
  <div class="main-container"><router-view></router-view></div>
 
  <Footer></Footer>
</div>
</template>
<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  // import Index from './index.vue'
  export default {
    components:{Header,Footer},
    methods: {
     
    },
    mounted() {
     
    },
  
        //
      }
</script>
<style>
  .main-container {
    min-height: calc(100vh - 140px);
    padding: 40px 40px 0 40px;
  }
</style>