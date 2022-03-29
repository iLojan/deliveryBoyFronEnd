export default {
    state:()=>({
        latLng:{},
        originLatitude:8.5832926,
        originLongitude:81.1781113,
        destinationLongitude:0,
        destinationLatitude:0,
    }),
    mutations: {
        seatLatLng(state,data){
            state.latLng.originLatitude=data.originLatitude
            state.latLng.originLongitude=data.originLongitude
            state.latLng.destinationLongitude=data.destinationLongitude
            state.latLng.destinationLatitude=data.destinationLatitude
        }
    },
    action:{
        setLatAndLng({commit},data){
            commit("seatLatLng",data)
        }
    },
    getters: {
        getLatLng(state) {
            return state.latLng;
        },
    }
}