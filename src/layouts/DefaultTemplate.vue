<template>
  <v-app>
    <v-app-bar flat max-height="65" color="transparent">
        <AppBar-component/>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer-component />
  </v-app>
</template>

<script>
import AppBarComponent from "./components/AppBar";
import FooterComponent from "./components/Footer";
export default {
  data() {
    return {};
  },
  components: {
    AppBarComponent,
    FooterComponent,
  },
};
</script>