import { createStore } from "vuex";

export default createStore({
  state: {
    userdata: "",
  },
  getters: {},
  actions: {},
  mutations: {
    SetUser(state, userdata) {
      console.log(userdata);
      state.userdata = userdata;
    },
  },
});
