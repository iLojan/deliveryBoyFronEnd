<template>

  <!-- <div class="preloader">
      <div class="loader">
        <div class="ytp-spinner">
          <div class="ytp-spinner-container">
            <div class="ytp-spinner-rotator">
              <div class="ytp-spinner-left">
                <div class="ytp-spinner-circle"></div>
              </div>
              <div class="ytp-spinner-right">
                <div class="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  <section id="home" class="hero-section">
    <div class="hero-shape">
      <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="hero-content">
            <h1 class="wow fadeInUp" data-wow-delay=".2s">Home Delivery <span>From Stores Near You</span> </h1>
            <p class="wow fadeInUp" data-wow-delay=".4s">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <router-link class="main-btn btn-hover wow fadeInUp" :to="{name:'order'}"> Order now</router-link>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
            <img src="assets/img/hero/hero-img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="services" class="service-section pt-150">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-8">
          <div class="section-title text-center mb-70">
            <span class="wow fadeInUp" data-wow-delay=".2s">Delivery Services</span>
            <h1 class="wow fadeInUp" data-wow-delay=".4s">All Essentials You Need</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-service wow fadeInUp" data-wow-delay=".2s">
            <div class="icon">
              <img src="assets/img/service/service-icon-1.svg" alt="" />
            </div>
            <div class="content">
              <h3>Food</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-service wow fadeInUp" data-wow-delay=".4s">
            <div class="icon">
              <img src="assets/img/service/service-icon-2.svg" alt="" />
            </div>
            <div class="content">
              <h3>Grocery</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-service wow fadeInUp" data-wow-delay=".6s">
            <div class="icon">
              <img src="assets/img/service/service-icon-3.svg" alt="" />
            </div>
            <div class="content">
              <h3>Furniture</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-service wow fadeInUp" data-wow-delay=".2s">
            <div class="icon">
              <img src="assets/img/service/service-icon-4.svg" alt="" />
            </div>
            <div class="content">
              <h3>Medicine</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-service wow fadeInUp" data-wow-delay=".4s">
            <div class="icon">
              <img src="assets/img/service/service-icon-5.svg" alt="" />
            </div>
            <div class="content">
              <h3>Electronics</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-service wow fadeInUp" data-wow-delay=".6s">
            <div class="icon">
              <img src="assets/img/service/service-icon-6.svg" alt="" />
            </div>
            <div class="content">
              <h3>Clothes</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <a href="#" class="scroll-top btn-hover">
    <i class="lni lni-chevron-up"></i>
  </a>
</template>
<script>
  export default {
    //
  }
</script>