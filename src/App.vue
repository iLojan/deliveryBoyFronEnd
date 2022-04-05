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
  import axios from 'axios';
  // import Index from './index.vue'
  export default {
    components:{Header,Footer},
    methods: {
      get(){
        const path = "api/v1/home";
        axios.get(path, { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTcHJpbmctU2VjdXJpdHktQXBwIiwic3ViIjoicGFyZGVlcDE2MSIsImlhdCI6MTY0ODcwMjQ1MSwiZXhwIjoxNjQ4NzA2MDUxfQ._66Il-5kA0h7-DWMWZb93U3vmCGJBC-gFO6zC4WsNiE` } })
            .then(res => {
              console.log(res.data);
            })
            .catch((error) => {
                console.log(error)
              });
      }
    },
    mounted() {
      this.get();
    },
  
        //
      }
</script>