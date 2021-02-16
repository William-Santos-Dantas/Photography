<template>
  <v-app
    ><v-app-bar flat max-height="65">
      <AppBar-component />
    </v-app-bar>
    <v-content> <HeroComponent /> <GalleryComponent /> </v-content>
  </v-app>
</template>

<script>
import AppBarComponent from "./components/AppBar"
import HeroComponent from "./components/Hero"
import GalleryComponent from "./components/Gallery"

export default {
  data() {
    return {};
  },
  components: {
    AppBarComponent,
    HeroComponent,
    GalleryComponent
  },
};
</script>