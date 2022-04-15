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
            <h1 class="wow fadeInUp" data-wow-delay=".2s">Express Delivery Service <span>Near You</span> </h1>
            <p class="wow fadeInUp" data-wow-delay=".4s">
              We courier your packages to any destination in Sri Lanka, and Our cost effective services are affordable
              and value for money.
            </p>
            <div class="main-btn btn-hover wow fadeInUp" @click="bookParcel()"> Book My Parcel</div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
            <img src="assets/img/hero/slider.svg" alt="" />
          </div>
        </div>
      </div>
      </div>
  </section>

  <section id="about" class="about-section pt-150">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about-img wow fadeInUp" data-wow-delay=".5s">
            <img src="assets/img/about/about.svg" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-content">
            <div class="section-title">
              <span class="wow fadeInUp" data-wow-delay=".2s">About Us</span>
              <h1 class="wow fadeInUp" data-wow-delay=".4s">Express Delivery & <br> Customer satisfaction</h1>
              <p class="wow fadeInUp" data-wow-delay=".6s">We are your trusted courier service partner. Specializing in
                door to door delivery with online we provide a reliable and efficient courier service to both
                individuals and corporates. Respecting the privacy and urgent nature of your deliveries. We treat every
                delivery with utmost care and respect, saving you both time and money.</p>
            </div>
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
            <div class="content">
              <h4>We Provide three different type of delivery services</h4>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".2s">
          <div class="icon m-auto">
            <img src="assets/img/service/service-1.svg" alt="" />
          </div>
          <div class="text-center">
            <h3>Documents and Parcel Delivery</h3>
            <p class="text-justify m-auto ">We understand the value of your documents and parcels. That’s why we provide
              dedicated personnel for your delivery requirements. we assure you a service that is reliable and on-time..
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".4s">
          <div class="icon m-auto">
            <img src="assets/img/service/service-2.svg" alt="" />
          </div>
          <div class="text-center">
            <h3>Urgent and Confidential Document Delivery</h3>
            <p class="text-justify ">Need a document delivered across the island? We provide a dependable, hassle-free
              document delivery service, assuring the delivery of your documents with utmost care , island-wide within
              24 hours.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".6s">
          <div class="icon m-auto">
            <img src="assets/img/service/service-3.svg" alt="" />
          </div>
          <div class="text-center">
            <h3>Special Package <br>Delivery</h3>
            <p class="text-justify ">We undertake not only documents, but also fragile parcels that needs to be handled
              with extreme care. Cakes, Flower bouquets, Gifts, Hampers, etc..</p>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section id="team" class="team-section img-bg pt-100 pb-40">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title mb-60 text-center">
            <span class="wow fadeInUp" data-wow-delay=".2s">Team Members</span>
            <h1 class="wow fadeInUp" data-wow-delay=".4s">Developers</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row team-wrapper">
      <div class="col-lg-4 col-md-6 -mt-30">
        <div class="single-team wow fadeInUp" data-wow-delay=".2s">
          <div class="info">

            <img class="m-auto" src="assets/img/team/member-1.png" width="150" height="150" alt="" />

          </div>
          <br>
          <div class="text-center">
            <h5>S.Sutharshan (NET/18/B2/19)</h5>
            <p>Team Lead & Frontend Developer</p>
          </div>


        </div>
      </div>
      <div class="col-lg-4 col-md-6 -mt-30">
        <div class="single-team wow fadeInUp" data-wow-delay=".2s">
          <div class="info">

            <img class="m-auto" src="assets/img/team/member-2.png" width="150" height="150" alt="" />

          </div>
          <br>
          <div class="text-center">
            <h5>I.LOJAN (MMW/18/B2/36)
            </h5>
            <p>Backend Developer</p>
          </div>


        </div>
      </div>
      <div class="col-lg-4 col-md-6 -mt-30">
        <div class="single-team wow fadeInUp" data-wow-delay=".2s">
          <div class="info">

            <img class="m-auto" src="assets/img/team/member-3.png" width="150" height="150" alt="" />

          </div>
          <br>
          <div class="text-center">
            <h5 class="m-auto">A.M.SAJITH (MMW/18/B2/28)</h5>
            <p>Database & Documentation</p>
          </div>


        </div>
      </div>
    </div>
  </section>


  <a href="#" class="scroll-top btn-hover">
    <i class="lni lni-chevron-up"></i>
  </a>
  {{hideEmail}}
  <div class="" v-if="showEmail">
    <LoginPopup @empty-cart="emptyCart"></LoginPopup>
  </div>

</template>
<script>
  import LoginPopup from './LoginPopup.vue'
  export default {
    //
    data() {
      return {
        showEmail: false,
      }
    },
    components: { LoginPopup },
    computed: {
      hideEmail() {
        return localStorage.getItem('email');
      }
    },
    methods: {
      bookParcel() {
        const email = localStorage.getItem('email');
        console.log("email", email);
        if (email) {
          this.$router.push({ name: 'order' })
        }
        else {
          this.showEmail = true
        }

      },
      emptyCart() {
        console.log("event");
      },
      showEmailPopup(e) {
        console.log("event", e);
        this.showEmail = false
      }

    },
    watch: {
      hideEmail(newCriteria, oldCriteria) {
        console.log("newCriteria, oldCriteria", newCriteria, oldCriteria);
        this.showEmail = false;

      }
    },
    mounted() {
      // const email = localStorage.getItem('email');
      // console.log("email",email);
      // if (email) {
      //   this.showEmail = false
      // }
    },
  }
</script>