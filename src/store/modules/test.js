export default {
    state:()=>({
        latLng:{},
    }),
    mutations: {
        seatLatLng(state,data){
            state.latLng.originLatitude=data.originLatitude
            state.latLng.originLongitude=data.originLongitude
            state.latLng.destinationLongitude=data.destinationLongitude
            state.latLng.destinationLatitude=data.destinationLatitude
        }
    },
    actions:{
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