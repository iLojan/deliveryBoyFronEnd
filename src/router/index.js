import { createRouter, createWebHistory } from 'vue-router'
import Index from "../components/index.vue"
import Order from "../components/Order.vue"
import Driver from "../components/driver/Driver.vue"
import User from "../components/User/User.vue"
import ManageAccount from "../components/User/ManageAccount.vue"
import DriverRating from "../components/User/DriverRating.vue"
import DriverManageAccount from "../components/driver/DriverManageAccount.vue"
import OrderList from "../components/driver/OrderList.vue"
import PendingOrder from "../components/driver/PendingOrder.vue"
import ReturnOrder from "../components/driver/ReturnOrder.vue"
import Inprogress from "../components/driver/Inprogress.vue"
import DeliveredOrder from "../components/driver/DeliveredOrder.vue"
import DriverBargain from "../components/driver/DriverBargain.vue"
import UserPendingOrder from "../components/User/MyOrder/PendingOrder.vue"
import UserReturnOrder from "../components/User/MyOrder/ReturnOrder.vue"
import UserInprogress from "../components/User/MyOrder/Inprogress.vue"
import CancelledOrder from "../components/User/MyOrder/CancelledOrder.vue"
import AllRequest from "../components/User/AllRequest.vue"
import UserDeliveredOrder from "../components/User/MyOrder/DeliveredOrder.vue"
import UserBargain from "../components/User/UserBargain.vue"
import AddPrice from "../components/driver/AddPrice.vue"
import UserProfile from "../components/User/UserProfile.vue"
import SignInVue from '../components/SignIn.vue'
import Dashboard from "../components/admin/Dashboard.vue"
import DeliveryBoy from "../components/admin/deliveryBoy/DeliveryBoy.vue"
import AddDeliveryBoy from "../components/admin/deliveryBoy/AddDeliveryBoy.vue"
import Orders from "../components/admin/orders/Orders.vue"
import DriverOrders from "../components/driver/Orders.vue"
import MyRating from "../components/driver/MyRating.vue"
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
        path:"add-rating",
        name:"addRating",
        component:DriverRating
      },
      {
        path:"all-request",
        name:"allRequest",
        component:AllRequest

      },
      {
        path:"user-bargain",
        name:"userBargain",
        component:UserBargain
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
      },
      {
        path:'my-in-progress',
        name:'my-inprogress',
        component:UserInprogress
      },
      {
        path:'cancelled-order',
        name:'cancelledOrder',
        component:CancelledOrder
      },      
      {
        path:'my-pending-order',
        name:'my-pendingOrder',
        component:UserPendingOrder
      },      
      {
        path:'my-return-order',
        name:'my-returnOrder',
        component:UserReturnOrder
      },      
      {
        path:'my-delivered-order',
        name:'my-deliveredOrder',
        component:UserDeliveredOrder
      }, 
    ]
  },
  {
    path: '/driver/',
    name:'driver-order',
    component: Driver,
    children: [
      {
        path: '',
        name: 'DriverManageAccount',
        component: DriverManageAccount
      },
      {
        path: 'available-order',
        name: 'order-list',
        component: OrderList
      },
      {
        path:'in-progress',
        name:'inprogress',
        component:Inprogress
      },
      {
        path: 'driverOrders',
        name: 'driverOrders',
        component: DriverOrders
      },
      {
        path:'pending-order',
        name:'pendingOrder',
        component:PendingOrder
      },
      {
        path:"my-rating",
        name:"MyRating",
        component:MyRating
      },   
      {
        path:'driver-bargain',
        name:'driverBargain',
        component:DriverBargain
      },   
      {
        path:'return-order',
        name:'returnOrder',
        component:ReturnOrder
      },      
      {
        path:'delivered-order',
        name:'deliveredOrder',
        component:DeliveredOrder
      }, 
           
      {
        // add-price
        path:'add-price',
        name:'addPrice',
        component:AddPrice
      },
      {
        path: 'driver-profile',
        name: "Driverprofile",
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
