<template lang="">
    <div>
        <main class="main">
            <section class="confirmation">
              <div class="container">
                <div class="confirmation__inner">
                  <div class="confirmation__top">
                    <div class="confirmation__topimg">
                      <img src="../assets/img/confirmation-icon.png" class="m-auto" alt="image">
                    </div>
                    <h4 class="confirmation__toptitle">
                      Order {{order.id}} has been created
                    </h4>
                    
                    <!-- <div class="confirmation__topaction">
                      <a href="#">
                        <img src="images/doc-icon.svg" alt="image">
                        <span>Скачать накладную</span>
                      </a>
                      <a href="#">
                        <img src="images/route-icon.svg" alt="image">
                        <span>Отслеживать заказ</span>
                      </a>
                    </div> -->
                  </div>
                  <div class="summary__left-bottom summary__left-bottom--confirmation">
                    <div class="summary__left-bottomitem">
                      <div class="summary__left-bottomtitle">
                        Package details
                      </div>
                      <ul class="summary__left-bottomlist">
                        <li class="summary__left-bottomlistitem">
                          <span>Route:</span>
                          <span class="w-4/6">{{order.fromLocation}} - {{order.toLocation}}</span>
                        </li>
                        <li class="summary__left-bottomlistitem">
                          <span>Type of shipment:</span>
                          <span>{{order.material}}</span>
                        </li>
                        <li class="summary__left-bottomlistitem">
                          <span>Weight:</span>
                          <span>{{order.weight}}kg</span>
                        </li>
                        <li class="summary__left-bottomlistitem">
                          <span>Total:</span>
                          <span>{{order.total}} LKR</span>
                        </li>
                          <li class="summary__left-bottomlistitem">
                          <span>Status:</span>
                          <span>{{order.status}}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="summary__left-bottomitem">
                      <div class="summary__left-bottomtitle">
                       Receiver
                      </div>
                      <ul class="summary__left-bottomlist">
                        <li class="summary__left-bottomlistitem">
                          <span>name:</span>
                          <span>{{order.receiverName}}</span>
                        </li>
                        <li class="summary__left-bottomlistitem">
                          <span>Phone number:</span>
                          <span>{{order.receiverPhoneNumber}}</span>
                        </li>
                        <li class="summary__left-bottomlistitem">
                          <span>E-mail:</span>
                          <span>{{order.receiverEmail}}</span>
                        </li>
                        <li class="summary__left-bottomlistitem">
                          <span>Address:</span>
                          <span>{{order.toLocation}}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="summary__left-bottomitem">
                      <div class="summary__left-bottomtitle">
                        Sender
                      </div>
                      <ul class="summary__left-bottomlist">
                        <li class="summary__left-bottomlistitem">
                          <span>Name:</span>
                          <span>{{user.name}}</span>
                        </li>
                        <!-- <li class="summary__left-bottomlistitem">
                          <span>Phone number:</span>
                          <span>{{order.receiverPhoneNumber}}</span>
                        </li> -->
                        <li class="summary__left-bottomlistitem">
                          <span>E-mail:</span>
                          <span>{{user.email}}</span>
                        </li>
                        <li class="summary__left-bottomlistitem">
                          <span>Address:</span>
                          <span>{{order.fromLocation}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex w-full justify-center">
                      <router-link class="bg-primary-color p-3 rounded-xl text-white mt-3" to="/user">go to dashboard</router-link>
               
                  </div>
           </div>
              </div>
            </section>
          </main>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
  data() {
    return {
      order:'',
      user:'',
    }
  },
  methods: {
    getOrder(id){
      console.log("id",id);
      let commonPath = process.env.VUE_APP_SERVER
      let path = "/api/v1/orderById/"+id.id;
    axios.get(commonPath+path,{ withCredentials: true })
    .then(res=>{
      this.order = res.data
      console.log(res);
    })
    },
    getUser(id){
      console.log("id",id);
      let userId = localStorage.getItem("id")
      let commonPath = process.env.VUE_APP_SERVER
      let path = "/api/auth/getUser/"+userId;
    axios.get(commonPath+path,{ withCredentials: true })
    .then(res=>{
      this.user = res.data
      console.log(res);
    })
    }
  },
  mounted() {
    console.log("query",this.$route.query);
    let id = this.$route.query
    this.getOrder(id)
    this.getUser();
 
  },
    
}
</script>
<style lang="">
    
</style>