import vueStore from './index'

export default {
  set: (key, value) => {
    // add expiration
    // encript data
    vueStore.state[key] = value;
    sessionStorage.setItem(key, value);
  },

  get: (key) => {
    return vueStore.state[key]? vueStore.state[key] : sessionStorage.getItem(key);
  },
};
