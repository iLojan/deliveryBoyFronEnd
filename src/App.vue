<template>

<div class="">
  <Header ></Header>
 <router-view></router-view>
  <Footer></Footer>
</div>
</template>
<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  // import Index from './index.vue'
  export default {
    components:{Header,Footer}
    //
  }
</script>