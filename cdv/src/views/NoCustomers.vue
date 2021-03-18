<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <template>
          <v-card class="mx-auto" max-width="365">
            <v-list-item three-line>
              <v-list-item-content>
                <!-- <div class="overline mb-4">OVERLINE</div> -->
                <v-list-item-title class="headline mb-1">
                  Sem Clientes
                </v-list-item-title>
                <v-list-item-subtitle
                  >Você ainda não cadastrou nenhum Cliente, toque no botão abaixo para
                  adicionar seu primeiro cliente.</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined text>
                Criar novo cliente
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
import Vue from "vue";
export default Vue.extend({
  //
});
</script>
