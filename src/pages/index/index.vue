<template>
  <v-content>
    <Hero-Component /> <Gallery-Component /> <LatestPost-Component />
  </v-content>
</template>

<script>
import AppBarComponent from "./components/AppBar";
import HeroComponent from "./components/Hero";
import GalleryComponent from "./components/Gallery";
import LatestPostComponent from "./components/LatestPost";

export default {
  data() {
    return {};
  },
  components: {
    AppBarComponent,
    HeroComponent,
    GalleryComponent,
    LatestPostComponent,
  },
};
</script>