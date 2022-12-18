export const user = {
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
};
