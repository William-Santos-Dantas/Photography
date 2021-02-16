<template>
  <v-app
    ><v-app-bar flat max-height="65">
      <AppBar-component />
    </v-app-bar>
    <v-content> <Hero-Component /> </v-content>
  </v-app>
</template>

<script>
import AppBarComponent from "./components/AppBar";
import HeroComponent from "./components/Hero";

export default {
  data() {
    return {};
  },
  components: {
    AppBarComponent,
    HeroComponent,
  },
};
</script>