<template>
  <v-app
    ><v-app-bar flat max-height="65">
      <AppBar-component />
    </v-app-bar>
    <v-content>
      <Hero-Component /> <Gallery-Component /> <LatestPost-Component />
    </v-content>
    <v-footer>
      <Footer-Component />
    </v-footer>
  </v-app>
</template>

<script>
import AppBarComponent from "./components/AppBar";
import HeroComponent from "./components/Hero";
import GalleryComponent from "./components/Gallery";
import LatestPostComponent from "./components/LatestPost";
import FooterComponent from "./components/Footer"

export default {
  data() {
    return {};
  },
  components: {
    AppBarComponent,
    HeroComponent,
    GalleryComponent,
    LatestPostComponent,
    FooterComponent
  },
};
</script>