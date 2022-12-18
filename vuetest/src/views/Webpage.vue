<style>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 0.1px;
  z-index: 2;
}

.v-toolbar__items.ittext a {
  color: #86c7bc;
}
v-toolbar__items {
  margin-top: -4px;
}
</style>
<template>
  <v-toolbar
    class="fixed-bar"
    dark
    prominent
    height="60"
    color="rgba(0,0,0,0.8)"
  >
    <v-container>
      <v-toolbar-title
        class="ml-2 text-left"
        style="font-size: 17px; color: #fff; font-weight: 600"
      >
        Apple TV+
      </v-toolbar-title>

      <!-- <v-spacer></v-spacer>
    <v-toolbar-items
      class="mt-n1 ittext hidden-sm-and-down"
      style="color: #7fffd4"
    >
      <v-btn class="ma-2" color="white" flat size="small"> Store </v-btn>
    </v-toolbar-items> -->
    </v-container>
  </v-toolbar>
  <v-toolbar style="margin-top: 1px" color="rgba(0,0,0,0.8)">
    <v-toolbar-title
      class="ml-2"
      style="font-size: 17px; color: #fff; font-weight: 600"
    >
      <center>
        MLS Season Pass. Stream every Major League Soccer match. Coming soon
      </center>
    </v-toolbar-title>
  </v-toolbar>

  <v-card class="mx-auto" max-width="100%">
    <v-app-bar
      color="#111"
      density="compact"
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
    >
      <v-container>
        <v-btn class="ma-2" color="white" flat size="small"> Store </v-btn>
        <v-btn class="ma-2" color="white" flat size="small"> Mac </v-btn>
        <v-btn class="ma-2" color="white" flat size="small"> iPad </v-btn>
        <v-btn class="ma-2" color="white" flat size="small"> Watch </v-btn>
        <v-btn class="ma-2" color="white" flat size="small"> AiriPads </v-btn>
        <v-btn class="ma-2" color="white" flat size="small"> TV on Home </v-btn>
        <v-btn class="ma-2" color="white" flat size="small">
          Only On Apple
        </v-btn>
        <v-btn class="ma-2" color="white" flat size="small">
          Accessories
        </v-btn>
      </v-container>
      <v-app-bar-title>Second</v-app-bar-title>
    </v-app-bar>
  </v-card>

  <VideoBackground
    src="large.mp4"
    poster="poster.jpg"
    :sources="[
      { src: '900>.mp4', res: 1000, autoplay: true },
      {
        src: '640.mp4',
        res: 1000,
        autoplay: true,
        poster: 'mobile-poster.png',
      },
    ]"
    style="max-height: 100%; height: 100vh"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
  >
  </VideoBackground>
  <div class="player-container">
    <vue3-video-player
      @play="your_method"
      src="./public/large.mp4"
    ></vue3-video-player>
  </div>

  <v-card class="mx-auto" max-width="100%">
    <v-layout>
      <v-main>
        <v-container fluid>
          <v-card border class="mt-2" density="compact">
            <v-card-title>Questions? Answers.</v-card-title>

            <v-expansion-panels variant="popout" class="my-4">
              <v-expansion-panel
                title="What is Apple TV+?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ></v-expansion-panel>
              <v-expansion-panel
                title="How can I watch it?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ></v-expansion-panel>
              <v-expansion-panel
                title="Can I share with my family?
                        "
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ></v-expansion-panel>
              <v-expansion-panel
                title="Are there commercials? And can I watch on demand?
                        "
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ></v-expansion-panel>
            </v-expansion-panels>
          </v-card>

          <v-card border density="comfortable">
            <v-card-text>
              <v-carousel>
                <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                ></v-carousel-item>

                <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                  cover
                ></v-carousel-item>

                <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  cover
                ></v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";
import "@cloudgeek/vue3-video-player/dist/vue3-video-player.css";
export default {
  name: "HelloWorld",
  components: {
    VideoBackground,
  },
  data: () => ({
    sticky: false,
    drawer: false,
    group: null,
    options: {
      minScrollbarLength: 100,
      items: ["aa", "bb"],
      Item: [
        "What is Apple TV+?",
        "How can I watch it?",
        "What does it cost?",
        "Can I share with my family?",
        "Are there commercials? And can I watch on demand?",
        "Do I need an Apple TV 4K?",
      ],
    },
    watcher: true,
  }),

  methods: {
    changeOptions() {
      this.options.minScrollbarLength = this.options.minScrollbarLength + 100;
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
