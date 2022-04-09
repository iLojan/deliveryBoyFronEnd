import { createRouter, createWebHistory } from 'vue-router'
import Index from "../components/index.vue"
import Order from "../components/Order.vue"
import User from "../components/User/User.vue"
import ManageAccount from "../components/User/ManageAccount.vue"
import UserProfile from "../components/User/UserProfile.vue"
import Resume8 from "../components/resume/resume8.vue"
import Resume9 from "../components/resume/resume9.vue"
import Resume08 from "../components/resume/resume/resume8.vue"
import Resume09 from "../components/resume/resume/resume9.vue"
import Resume11 from "../components/resume/resume11.vue"
import Resume12 from "../components/resume/resume12.vue"
import Resume13 from "../components/resume/resume13.vue"
import Resume14 from "../components/resume/resume14.vue"
import Resume15 from "../components/resume/resume15.vue"
import SignInVue from '../components/SignIn.vue'
import Dashboard from "../components/admin/Dashboard.vue"
import DeliveryBoy from "../components/admin/deliveryBoy/DeliveryBoy.vue"
import AddDeliveryBoy from "../components/admin/deliveryBoy/AddDeliveryBoy.vue"
import Orders from "../components/admin/orders/Orders.vue"
import OderDetails from "../components/admin/orders/OrderDetails.vue"
import adminUser from "../components/admin/users/Users.vue"
import AdminVue from '../components/admin/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/Resume8',
    name: 'Resume8',
    component: Resume8
  },
  {
    path: '/Resume9',
    name: 'Resume9',
    component: Resume9
  },
  {
    path: '/Resume08',
    name: 'Resume08',
    component: Resume08
  },
  {
    path: '/Resume09',
    name: 'Resume09',
    component: Resume09
  },
  {
    path: '/Resume11',
    name: 'Resume11',
    component: Resume11
  },
  {
    path: '/Resume12',
    name: 'Resume12',
    component: Resume12
  },
  {
    path: '/Resume13',
    name: 'Resume13',
    component: Resume13
  },
  {
    path: '/Resume14',
    name: 'Resume14',
    component: Resume14
  },
  {
    path: '/Resume15',
    name: 'Resume15',
    component: Resume15
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
    component: User,
    children: [
      {
        path: '',
        name: 'manageAccount',
        component: ManageAccount
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
