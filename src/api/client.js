import axios from 'axios';
import store from '../store';
import storageHelper from '../store/storageHelper';
import { $log } from './logger';

const customAxiosInstance = axios.create();

const baseUrl = process.env.VUE_APP_SERVER + process.env.VUE_APP_API_VERSION;

customAxiosInstance.interceptors.request.use(
  (config) => {
    // console.log("Adding bearer to request : ", store.state.accessToken);
    config.headers = {
      Authorization: `Bearer ${localStorage.bear}`,
    };

    let sessionId = storageHelper.get('sessionId');
    if (sessionId) {
      config.headers["session-id"] = sessionId;
    } else {
      $log("** No session id **");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxiosInstance.interceptors.response.use(
  (response) => {
    let sessionId = response.headers["session-id"];
    if (sessionId) {
      storageHelper.set('sessionId', sessionId);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // console.log(`Intercepted error response, retry : `, originalRequest._retry)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (store.state.refreshToken === "none") {
        await newAccessToken();
      } else {
        await refreshAccessToken();
      }
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${store.state.accessToken}`;
      return customAxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

async function refreshAccessToken() {
    // console.log("Refreshing access token");
    const requestPath = baseUrl + process.env.VUE_APP_AUTH_REFRESH;
    await axios
        .post(requestPath, store.getters.getAuthTokens)
        .then((response) => {
            store.dispatch('refreshAccessToken', response.data.accessToken);
        })
        .catch(async (error) => {
           // console.log("Error occured while refreshing token :", error);
        });
}

async function newAccessToken() {
    // console.log("Getting a new access token.")
    const requestPath = baseUrl + process.env.VUE_APP_AUTH;
    const requestPayload = {
        clientId: process.env.VUE_APP_CLIENT_ID,
        clientPassword: process.env.VUE_APP_CLIENT_PASSWORD
    }
    await axios
        .post(requestPath, requestPayload)
        .then((response) => response.data.data)
        .then((data) => {
            let tokens = {
                "accessToken" : data.accessToken.token,
                "refreshToken" : data.refreshToken
            }
            store.dispatch('updateAuthTokens', tokens);
        })
        .catch((error) => {
            console.log("Auth failed for id/pw :", error);
        });
}

export default customAxiosInstance;