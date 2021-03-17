<template>
  <v-bottom-navigation app fixed grow v-model="activeItem" color="primary">
    <v-btn value="home" :to="{ path: '/' }">
      <span>Inicio</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn value="products" :to="{ name: 'products' }">
      <span>Produtos</span>
      <v-icon>card_giftcard</v-icon>
    </v-btn>

    <v-btn elevation="2" value="sell" :to="{ name: 'sell' }">
      <v-icon large>attach_money</v-icon>
    </v-btn>

    <v-btn value="customers" :to="{ name: 'customers' }">
      <span>Clientes</span>
      <v-icon>person</v-icon>
    </v-btn>

    <v-btn value="sales" :to="{ name: 'sales' }">
      <span>Vendas</span>
      <v-icon>shopping_cart</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BottomNav extends Vue {
  activeItem: string = "top";
}
</script>