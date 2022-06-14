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
                        Order
                      </div>
                      <ul class="summary__left-bottomlist">
                        <li class="summary__left-bottomlistitem">
                          <span>Route:</span>
                          <span>{{order.fromLocation}} - {{order.toLocation}}</span>
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
                          <span>{{order.price}} LKR</span>
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
                          <span>Surname and name:</span>
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
                          <span>{{order.fromLocation}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="flex">
              <button>print</button>
            </div>
          </main>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
  data() {
    return {
      order:'',
    }
  },
  methods: {
    getOrder(id){
      console.log("id",id);
      let path = "/api/v1/orderById/"+id.id;
    axios.get(path,{ withCredentials: true })
    .then(res=>{
      this.order = res.data
      console.log(res);
    })
    }
  },
  mounted() {
    console.log("query",this.$route.query);
    let id = this.$route.query
    this.getOrder(id)
 
  },
    
}
</script>
<style lang="">
    
</style>