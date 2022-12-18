<template>
  <v-card>
    <!-- <v-layout> -->
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <v-app-bar color="primary" prominent class="text-left">
      <!-- <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon> -->

      <v-toolbar-title>MY VUE TEST</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="GoWebsite()" color="white" variant="text"
        >Go To Website</v-btn
      >

      <v-btn color="white" variant="text" icon="mdi-account-circle"></v-btn>
      <h4 class="mr-3">{{ userdata }}</h4>

      <v-btn
        @click="Logout()"
        color="white"
        variant="text"
        icon="mdi-logout"
      ></v-btn>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer> -->
    <!-- </v-layout> -->
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    userdata: "",
    // items: [
    //   {
    //     title: "Foo",
    //     value: "foo",
    //   },
    //   {
    //     title: "Bar",
    //     value: "bar",
    //   },
    //   {
    //     title: "Fizz",
    //     value: "fizz",
    //   },
    //   {
    //     title: "Buzz",
    //     value: "buzz",
    //   },
    // ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  created() {
    this.userdata = this.getUser;
  },

  computed: {
    getUser() {
      console.log(this.$store.state.userdata);
      return this.$store.state.userdata;
    },
  },

  methods: {
    Logout() {
      this.$router.push({ name: "Login" });
      this.$store.state.userdata = "";
    },
    GoWebsite() {
      this.$router.push({ name: "Webpage" });
    },
  },
};
</script>
