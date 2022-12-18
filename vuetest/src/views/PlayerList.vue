<template>
  <NavDrawer />
  <v-layout>
    <v-main>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="500">
          <!-- <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template> -->
          <v-card>
            <v-card-title>
              <span class="text-h5">Create Team</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form v-model="form" @submit.prevent="onSubmit">
                  <v-row>
                    <span> {{ errmsg }}</span>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="team.name"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Name *"
                      ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="player.id"
                        label="Player Count"
                      ></v-text-field>
                    </v-col> -->
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="team.division"
                        label="Region"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="team.city"
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

      <v-row justify="center">
        <v-dialog v-model="dialog1" persistent width="500">
          <!-- <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template> -->
          <v-card>
            <v-card-title>
              <span class="text-h5">Create Player</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form v-model="form" @submit.prevent="onSubmit1">
                  <v-row>
                    <span> {{ errmsg }}</span>
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
                        v-model="player.position"
                        label="Region"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="12" class="text-right">
                      <v-spacer></v-spacer>

                      <v-btn
                        class="mr-2"
                        size="small"
                        color="primary"
                        variant="outlined"
                        type="submit"
                      >
                        Save
                      </v-btn>
                      <v-btn
                        size="small"
                        color="error"
                        variant="outlined"
                        @click="dialog1 = false"
                      >
                        Close
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>

      <v-col cols="12" md="12" class="text-left">
        <v-btn
          @click="newItem()"
          size="small"
          rounded="lg"
          color="primary"
          variant="outlined"
          class="mt-7"
        >
          Create New
        </v-btn>
        <v-card-text class="mt-3">
          <v-table fixed-header height="500px" @scroll="loadMore">
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Player Count</th>
                <th class="text-left">Region</th>
                <th class="text-left">Country</th>
                <th class="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in playerlist" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.player_count }}</td>
                <td>{{ item.division }}</td>
                <td>{{ item.city }}</td>
                <td>
                  <v-btn
                    @click="editItem(item)"
                    variant="outlined"
                    size="small"
                    rounded="lg"
                    color="warning"
                    class="mr-2"
                  >
                    Edit
                  </v-btn>
                  <v-btn
                    @click="deleteItem(item)"
                    variant="outlined"
                    size="small"
                    rounded="lg"
                    color="error"
                    class="mr-2"
                  >
                    Delete
                  </v-btn>

                  <v-btn
                    @click="addPlayer(item)"
                    size="small"
                    rounded="lg"
                    color="primary"
                    variant="outlined"
                  >
                    Add Player
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-col>
    </v-main>
  </v-layout>
</template>

<script>
import NavDrawer from "../views/NavigationDrawer.vue";
import axios from "axios";
//import PlayerEntry from "../views/PlayerEntry.vue";
export default {
  components: {
    NavDrawer,
    //PlayerEntry,
  },
  data: () => ({
    dialog: false,
    dialog1: false,
    errmsg: "",
    page: 1,
    itemsPerPage: 5,
    loading: false,
    player: {
      id: 0,
      name: "",
      position: "",
    },

    team: {
      id: 0,
      name: "",
      division: "",
      city: "",
      player_count: 0,
    },

    playerlist: [],
    teamList: [],
    maxid: 0,
  }),

  created() {
    this.GetAllData();
  },

  computed: {
    items() {
      return this.page * this.itemsPerPage;
    },
  },

  methods: {
    GetAllData() {
      axios.get("https://www.balldontlie.io/api/v1/players").then((res) => {
        var plist = [];
        plist = res.data.data;
        var teams = this.onlyUnique(plist);
        this.teamList = teams;
        this.maxid = this.maxTeamId();
        teams.forEach((a) => {
          var count = this.playercount(a.team.id, plist);
          var team = {};
          team.id = a.team.id;
          team.name = a.team.name;
          team.player_count = count.length;
          team.division = a.team.division;
          team.city = a.team.city;
          this.playerlist.push(team);
        });
      });
    },
    onlyUnique(list) {
      return list.filter(
        (a, i) => list.findIndex((s) => a.team.id === s.team.id) === i
      );
    },
    playercount(teamid, plist) {
      return plist.filter((p) => p.team.id == teamid);
    },
    maxTeamId() {
      return Math.max(...this.teamList.map((o) => o.team.id));
    },
    maxPlayerId() {
      return Math.max(...this.playerlist.map((o) => o.id));
    },

    addPlayer(item) {
      this.player = [];
      this.dialog1 = true;
      this.team.id = item.id;
    },

    newItem() {
      this.team = [];
      this.dialog = true;
    },
    editItem(item) {
      this.team.id = item.id;
      this.team.name = item.name;
      this.team.division = item.division;
      this.team.city = item.city;
      this.dialog = true;
    },

    deleteItem(item) {
      this.playerlist.splice(item, 1);
    },

    onSubmit() {
      var vm = this;

      var pl = vm.playerlist.filter((a) => a.id == vm.team.id);

      if (pl.length > 0) {
        pl[0].id = vm.team.id;
        pl[0].name = vm.team.name;
        pl[0].division = vm.team.division;
        pl[0].city = vm.team.city;

        vm.team = [];
      } else {
        var p = vm.playerlist.filter((a) => a.name == vm.team.name);

        if (p.length > 0) {
          vm.errmsg = "Name Must Be Unique.";
        } else {
          vm.team.id = this.maxid + 1;
          vm.team.player_count = 0;
          vm.playerlist.push(vm.team);
          vm.errmsg = "Successfully!";
          this.maxid += 1;
          vm.team = [];
        }
      }
    },

    onSubmit1() {
      var vm = this;
      var pl = vm.playerlist.filter((a) => a.id == vm.player.id);

      if (pl.length > 0) {
        pl[0].id = vm.player.id;
        pl[0].name = vm.player.name;
        pl[0].division = vm.player.position;

        vm.player = [];
      } else {
        var p = vm.playerlist.filter((a) => a.name == vm.player.name);

        if (p.length > 0) {
          vm.errmsg = "Name Must Be Unique.";
        } else {
          var npl = vm.playerlist.filter((a) => a.id == vm.team.id);
          npl[0].player_count += 1;
          vm.errmsg = "Successfully!";
          vm.player = [];
        }
      }
    },

    required(v) {
      return !!v || "Name is required";
    },
  },
};
</script>
