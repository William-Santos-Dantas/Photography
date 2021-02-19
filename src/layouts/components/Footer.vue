<template>
  <v-container>
    <v-footer padless>
      <v-card flat tile class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="pt-0">
          Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis,
          bibendum egestas augue arcu ut est. Mauris nec dolor in eros commodo
          tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel
          viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Per
          aumento de cachacis, eu reclamis. Quem num gosta di mé, boa gentis num
          é. Quem manda na minha terra sou euzis! Em pé sem cair, deitado sem
          dormir, sentado sem cochilar e fazendo pose. Copo furadis é disculpa
          de bebadis, arcu quam euismod magna. Atirei o pau no gatis, per gatis
          num morreus. Aenean aliquam molestie leo, vitae iaculis nisl. Sapien
          in monti palavris qui num significa nadis i pareci latim. Tá
          deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Jutai F Dantas</strong>
        </v-card-text>
      </v-card>
    </v-footer></v-container
  >
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram",
    ],
  }),
};
</script>