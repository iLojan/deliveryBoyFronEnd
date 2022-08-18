<template lang="">
  <header class="header mb-36">
      <div class="navbar-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">
                  <img src="assets/img/logo/logo.svg" width="592" height="150" alt="Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" class="navbar-nav ml-auto">
                    <li class="nav-item" v-if="$route.name == 'index'" >
                      <a class="page-scroll" href="/">Home</a>
                      
                    </li>

                    <li class="nav-item" v-if="$route.name == 'index'">
                      <a class="page-scroll" href="#about">About</a>
                    </li>

                    <li class="nav-item" v-if="$route.name == 'index'">
                      <a class="page-scroll" href="#services">Services</a>
                      
                    </li>
                    
                    <li class="nav-item" v-if="$route.name == 'index'">
                      <a class="page-scroll" href="#team">Team</a>
                    </li>
                    <li class="nav-item" v-if="!getLogin">
                     
                      <router-link to="/login" class="text-red-600 page-scroll">Login</router-link>  
                      
                    </li>
                    <li class="nav-item" v-if="getLogin"> 
                      <div class="flex justify-center">
                        <div>
                          <div class="dropdown relative">
                            <button
                              class="dropdown-toggle text-p1-font py-2 mt-1 font-medium text-xs leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                              type="button"
                              id="dropdownMenuButton1d"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {{showUserDropDown}}
                            
                            </button>
                            <ul
                              class="
                                dropdown-menu
                                min-w-max
                                absolute
                                hidden
                                bg-white
                                text-base
                                z-50
                                float-left
                                py-2
                                list-none
                                text-left
                                rounded-lg
                                shadow-lg
                                mt-1
                                hidden
                                m-0
                                bg-clip-padding
                                border-none
                              "
                              aria-labelledby="dropdownMenuButton1d"
                            >
                              <li>
                                {{checkRole}}
                                <router-link v-if="checkRole ==='ROLE_USER'"  class="
                                dropdown-item
                                text-sm
                                py-2
                                px-4
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-700
                                hover:bg-gray-100
                              " to="/user">My Order</router-link>
                            
                                <router-link v-if="checkRole ==='ROLE_DRIVER'"  class="
                                dropdown-item
                                text-sm
                                py-2
                                px-4
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-700
                                hover:bg-gray-100
                              " to="/driver">My Account</router-link>
                              </li>
                              <li>
                                <a
                                  class="
                                    dropdown-item
                                    text-sm
                                    py-2
                                    px-4
                                    font-normal
                                    block
                                    w-full
                                    whitespace-nowrap
                                    bg-transparent
                                    text-gray-700
                                    hover:bg-gray-100
                                  "
                                  href="#"
                                  >Another action</a
                                >
                              </li>
                              <li>
                                <a
                                  class="
                                    dropdown-item
                                    text-sm
                                    py-2
                                    px-4
                                    font-normal
                                    block
                                    w-full
                                    whitespace-nowrap
                                    bg-transparent
                                    text-gray-700
                                    hover:bg-gray-100
                                  "
                                  href="#"
                                  >Something else here</a
                                >
                              </li>
                              <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                              <li>
                                <a
                                  class="
                                    dropdown-item
                                    text-sm
                                    py-2
                                    px-4
                                    font-normal
                                    block
                                    w-full
                                    whitespace-nowrap
                                    bg-transparent
                                    text-gray-700
                                    hover:bg-gray-100
                                  "
                                  @click="logout()"
                                  >Logout</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  data() {
    return {
      showUserDropDown:'',
    }
  },
  methods: {
    logout(){
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      localStorage.removeItem('name');
      this.$store.dispatch("loginStatus", false)
      this.$router.push("/")
    }
  },
  computed:{
    checkRole(){
    return localStorage.getItem('role')
    },
    checkUserName(){
      return localStorage.getItem('username')
    },
    getLogin(){
            return this.$store.getters.getloginStatus
        },

  },
  watch: {
      hideEmail(newCriteria, oldCriteria) {
        console.log("newCriteria, oldCriteria", newCriteria, oldCriteria);
        // this.showEmail = false;

      }
    },
  mounted() {
    var userName = localStorage.getItem('username');
    if(userName){
      this.showUserDropDown = userName
    }
  },
}
</script>
<style lang="">
  
</style>