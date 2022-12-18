<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <!-- <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template> -->
      <v-card>
        <v-card-title>
          <span class="text-h5">Create Player</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="player.name"
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    clearable
                    label="Name *"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="player.player_count"
                    label="Player Count"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="player.region"
                    label="Region"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="player.country"
                    label="Country"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12" class="text-right">
                  <v-spacer></v-spacer>
                  <v-btn
                    :loading="loading"
                    block
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                  >
                    Save
                  </v-btn>
                  <v-btn
                    class="mr-2"
                    size="small"
                    color="primary"
                    variant="outlined"
                    @click="a"
                  >
                    Save
                  </v-btn>
                  <v-btn
                    size="small"
                    color="error"
                    variant="outlined"
                    @click="dialog = false"
                  >
                    Reset
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="outlined"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="outlined"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    form: false,
    player: [
      {
        id: 0,
        name: "",
        player_count: 0,
        region: "",
        country: "",
      },
    ],
  }),

  methods: {
    onSubmit() {
      var vm = this;
      if (!this.form) return;
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);

      this.playerlist.push(vm.playerlist);
      this.$emit("getData", { methodCall: "GetAllData" });
    },
    required(v) {
      return !!v || "Name is required";
    },
  },
};
</script>
