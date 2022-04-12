import { createStore } from 'vuex'
// import {maps} from './modules/maps.js'
// import {test} from './modules/test.js'
import axios from 'axios';
// import client from "../api/client.js";

export default createStore({
    state:()=>({
        cultureCode: 'En-us',
        authenticated: false,
        sessionId: null,
        accessToken: "none",
        refreshToken: "none",
        commonPath:process.env.VUE_APP_LOGIN,
        latLng:{
            originLatitude:8.5832926,
        originLongitude:81.1781113,
        destinationLongitude:null,
        destinationLatitude:null,        
        },
        test: [
            { lant: 7.7046699, lng: 81.7166666 }, 
            { lant: 7.7055431, lng: 81.7165866 }, 
            { lant: 7.705742, lng: 81.7158264 }, 
            { lant: 7.7053815, lng: 81.7141455 }
        ]
    }),
    mutations: {
        seatLatLng(state,data){
            
            console.log("seatLatLng",data);
            state.latLng.originLatitude=data.originLatitude
            state.latLng.originLongitude=data.originLongitude
            state.latLng.destinationLongitude=data.destinationLongitude
            state.latLng.destinationLatitude=data.destinationLatitude
        },
        setDestination(state,data){
            console.log("seatLatLng 12434",data);
            state.latLng.originLatitude=data.lant
            state.latLng.originLongitude=data.lng
        },
        setAccessToken(){
          console.log("data","data");
        }
    },
    actions:{
        async getAccessToken({commit},data){

            const path = "/api/auth/signin";
            await axios.post(path,data,{ withCredentials: true })
            .then(res => {
                commit("setAccessToken",res)
            //   commit("updateAccessTokenStatus", res.status)
            //   commit("updateTokenToLocalStorage", res.data.data)
            })
            .catch(error => {
              commit("updateAccessTokenStatus", error)
            })
            
            // const path = "api/v1/auth/login";
            // console.log("data",data,path);
            // axios.post(path,data,{ withCredentials: true })
            // .then(res =>{
            //     console.log("res",res);
            // })
            // .catch(function (error) {
            //     console.log(error);
            //   });
           
        },
        getAccessTokenDetails({commit},data){
            const path = "/api/v1/auth/userinfo";
            console.log("data",data,path);
            let header = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTcHJpbmctU2VjdXJpdHktQXBwIiwic3ViIjoicGFyZGVlcDE2MSIsImlhdCI6MTY0ODQ4ODcwMiwiZXhwIjoxNjQ4NDkyMzAyfQ.plKCDeP_6DEgQNMpRqDI9PJruwNHLWmAZCBxU907dZc"
            axios.get(path,
                {headers:header})
            .then(res =>{
                console.log("res",res);
            })
            .catch(function (error) {
                console.log(error);
              });
            commit("setAccessToken",data)
        },
        setLatAndLng({commit},data){
            console.log("setLatAndLng",data);
            commit("seatLatLng",data)
        },
        setDynamicLoop({commit},datas){
            console.log("state.test,state.test",datas);
            datas.forEach((data) => {
                setTimeout(
                    function(){
                        commit("setDestination",data)
                    }
                , 1000);
            });
        }
    },
    getters: {
        getLatLng(state) {
            return state.latLng;
        },
    }
})


