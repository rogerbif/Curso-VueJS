<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <template>
          <v-card class="pa-4 mx-auto" max-width="365" min-height="185">
            <v-list-item three-line>
              <v-list-item-content>
                <!-- <div class="overline mb-4">OVERLINE</div> -->
                <v-list-item-title class="headline mb-1">
                  Sem Produtos
                </v-list-item-title>
                <v-list-item-subtitle
                  >Você ainda não cadastrou nenhum Produto, toque no botão abaixo para
                  adicionar seu primeiro produto.</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined text :to="{ name: 'products' }">
                Criar novo produto
                <v-icon right dark> mdi-plus </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NoProductsComp extends Vue {
}
</script>
