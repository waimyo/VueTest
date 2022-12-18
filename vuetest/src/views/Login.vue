<template>
  <!-- <v-sheet class="bg-deep-purple pa-12" rounded> -->
  <v-card class="mx-auto px-6 py-8 elevation-5 mt-10" max-width="344">
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-text-field
        v-model="username"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="UserName"
      ></v-text-field>

      <!-- <v-text-field
        v-model="password"
        :readonly="loading"
        :rules="[required]"
        clearable
        label="Password"
      ></v-text-field> -->

      <br />

      <v-btn
        :loading="loading"
        block
        color="success"
        size="large"
        type="submit"
        variant="elevated"
      >
        Login In
      </v-btn>
    </v-form>
  </v-card>
  <!-- </v-sheet> -->
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: "Login",
  data: () => ({
    form: false,
    username: null,
    //password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);

      this.$store.commit("SetUser", this.username);
      this.$router.push({ name: "PlayerList" });
    },
    required(v) {
      return !!v || "Username is required";
    },
  },
};
</script>
