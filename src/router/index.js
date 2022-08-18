import { createRouter, createWebHistory } from 'vue-router'
import Index from "../components/index.vue"
import Order from "../components/Order.vue"
import Driver from "../components/driver/Driver.vue"
import User from "../components/User/User.vue"
import ManageAccount from "../components/User/ManageAccount.vue"
import DriverManageAccount from "../components/driver/DriverManageAccount.vue"
import AddPrice from "../components/driver/AddPrice.vue"
import UserProfile from "../components/User/UserProfile.vue"
import SignInVue from '../components/SignIn.vue'
import Dashboard from "../components/admin/Dashboard.vue"
import DeliveryBoy from "../components/admin/deliveryBoy/DeliveryBoy.vue"
import AddDeliveryBoy from "../components/admin/deliveryBoy/AddDeliveryBoy.vue"
import Orders from "../components/admin/orders/Orders.vue"
import OderDetails from "../components/admin/orders/OrderDetails.vue"
import adminUser from "../components/admin/users/Users.vue"
import AdminVue from '../components/admin/Admin.vue'
import SignUp from '../components/SignUp.vue'
import AllVue from '../components/User/MyOrder/All.vue'
import Confirmation from '../components/Confirmation.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/login',
    name: 'login',
    component: SignInVue
  },
  {
    path:'/signup',
    name:'signup',
    component:SignUp
  },
  {
    path:'/confirmation',
    name:'confirmation',
    component:Confirmation
  },
  {
    path:'/admin/',
    component:AdminVue,
    children:[
      {
        path: '',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'delivery-boy',
        name: 'deliveryBoy',
        component: DeliveryBoy
      },
      {
        path: 'add-delivery-boy',
        name: 'add-delivery-boy',
        component: AddDeliveryBoy
      },
      {
        path: 'order-manager',
        name: 'orderManager',
        component: Orders
      },
      {
        path: 'order-details',
        name: 'orderDetails',
        component: OderDetails
      },
      {
        path: 'user',
        name: 'user',
        component: adminUser
      }
    ]
  },
  {
    path: '/user/',
    name:'user-order',
    component: User,
    children: [
      {
        path: '',
        name: 'manageAccount',
        component: ManageAccount
      },
      {
        path:'all-order',
        name:'allOrder',
        component:AllVue
      },
      {
        path: 'profile',
        name: "profile",
        component: UserProfile
      }
    ]
  },
  {
    path: '/driver/',
    name:'driver-order',
    component: Driver,
    children: [
      {
        path: 'DriverManageAccount',
        name: 'DriverManageAccount',
        component: DriverManageAccount
      },
      {
        // add-price
        path:'',
        name:'addPrice',
        component:AddPrice
      },
      {
        path: 'profile',
        name: "profile",
        component: UserProfile
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
